const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = 5000;
const JWT_SECRET = 'your-secret-key';

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const sequelize = new Sequelize('postgres://node_user:password@localhost:5432/maindb');

// User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwordValue: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "..."
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "100"
  },
  accessCourse: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: []
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  birthDate:{
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  workplace: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  lastOnline: {
    type: DataTypes.DATE,
    allowNull: true,
  }
});

// Chat Message model
const ChatMessage = sequelize.define('ChatMessage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

// Связи между моделями
User.hasMany(ChatMessage, { foreignKey: 'userId' });
ChatMessage.belongsTo(User, { foreignKey: 'userId' });

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// СУЩЕСТВУЮЩИЕ ROUTES

app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ 
      email, 
      password: hashedPassword, 
      passwordValue: password,
      lastOnline: new Date()
    });

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET);
    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Обновляем время последнего входа
    await user.update({ lastOnline: new Date() });

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET);
    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/checkRoles', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId, {
      attributes: ['role']
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/getTableData', async (req, res) => {
  try {
    const users = await User.findAll({
      order: [['id', 'ASC']],
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

app.get('/api/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId);
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/users/:id/email', async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password, role } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    
    const [updated] = await User.update(
      { email, password, role },
      { where: { id } }
    );
    
    if (updated) {
      const updatedUser = await User.findByPk(id);
      return res.json(updatedUser);
    }
    
    return res.status(404).json({ message: 'User not found' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error updating email' });
  }
});

app.put('/api/updateAdminUsers', async (req, res) => {
  const usersData = req.body;

  for (let user of usersData) {
    if (!user.accessCourse) {
      user.accessCourse = [];
    } else if (typeof user.accessCourse === 'string') {
      user.accessCourse = user.accessCourse.split(',').map(item => item.trim());
    }
  }

  if (!Array.isArray(usersData)) {
    return res.status(400).json({ error: 'Expected an array of users' });
  }

  try {
    const users = await User.findAll({
      order: [['id', 'ASC']],
    });
    const usersArray = users.map(user => user.get({ plain: true }));

    for (const i of usersArray){
      if (i.passwordValue != usersData[i.id - 1].passwordValue) {
        usersData[i.id - 1].password = await bcrypt.hash(usersData[i.id - 1].passwordValue, 10);
      }
    }
  } catch (error) {
    console.error(error);
  }

  try {
    await sequelize.transaction(async (t) => {
      for (const userData of usersData) {
        await User.update(
          {
            email: userData.email,
            password: userData.password,
            passwordValue: userData.passwordValue,
            role: userData.role,
            accessCourse: userData.accessCourse,
            firstName: userData.firstName,
            lastName: userData.lastName
          },
          {
            where: { id: userData.id },
            transaction: t,
          }
        );
      }
    });

    res.json({ success: true, message: 'Users updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update users' });
  }
});

app.put('/api/updateProfileTeacher', authenticateToken, async (req, res) => {
  try{
    const usersData = req.body.user;
    await User.update(
      {
        email: usersData.email,
        firstName: usersData.firstName,
        lastName: usersData.lastName,
        phone: usersData.phone,
        city: usersData.city,
        workplace: usersData.workplace,
        birthDate: usersData.birthDate,
        position: usersData.position
      },
      {
        where: { id: usersData.id },
      }
    );
    res.json({ success: true, message: 'Users updated successfully' });
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
});

// НОВЫЕ CHAT ROUTES

// Получение сообщений чата
app.get('/api/chat/messages', authenticateToken, async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    const messages = await ChatMessage.findAll({
      limit,
      offset,
      order: [['createdAt', 'ASC']],
      include: [{
        model: User,
        attributes: ['firstName', 'lastName', 'email']
      }]
    });

    // Получаем онлайн пользователей (активность за последние 5 минут)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const onlineUsers = await User.findAll({
      where: {
        lastOnline: {
          [Sequelize.Op.gte]: fiveMinutesAgo
        }
      },
      attributes: ['id', 'firstName', 'lastName', 'email', 'lastOnline']
    });

    res.json({
      messages: messages.map(msg => ({
        id: msg.id,
        text: msg.text,
        userId: msg.userId,
        userName: msg.userName,
        createdAt: msg.createdAt,
        user: msg.User
      })),
      onlineUsers: onlineUsers.map(user => ({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`.trim() || user.email,
        lastOnline: user.lastOnline
      }))
    });
  } catch (error) {
    console.error('Ошибка получения сообщений:', error);
    res.status(500).json({ error: error.message });
  }
});

// Отправка сообщения в чат
app.post('/api/chat/messages', authenticateToken, async (req, res) => {
  try {
    const { text, userName } = req.body;
    const userId = req.user.userId;

    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: 'Message text is required' });
    }

    if (text.length > 1000) {
      return res.status(400).json({ error: 'Message too long' });
    }

    // Получаем информацию о пользователе
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const finalUserName = userName || `${user.firstName} ${user.lastName}`.trim() || user.email;

    const message = await ChatMessage.create({
      text: text.trim(),
      userId,
      userName: finalUserName
    });

    // Обновляем время последней активности пользователя
    await user.update({ lastOnline: new Date() });

    res.status(201).json({
      id: message.id,
      text: message.text,
      userId: message.userId,
      userName: message.userName,
      createdAt: message.createdAt
    });
  } catch (error) {
    console.error('Ошибка отправки сообщения:', error);
    res.status(500).json({ error: error.message });
  }
});

// Получение онлайн пользователей
app.get('/api/chat/online-users', authenticateToken, async (req, res) => {
  try {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    
    const onlineUsers = await User.findAll({
      where: {
        lastOnline: {
          [Sequelize.Op.gte]: fiveMinutesAgo
        }
      },
      attributes: ['id', 'firstName', 'lastName', 'email', 'lastOnline'],
      order: [['lastOnline', 'DESC']]
    });

    res.json({
      users: onlineUsers.map(user => ({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`.trim() || user.email,
        lastOnline: user.lastOnline
      })),
      count: onlineUsers.length
    });
  } catch (error) {
    console.error('Ошибка получения онлайн пользователей:', error);
    res.status(500).json({ error: error.message });
  }
});

// Обновление статуса онлайн
app.post('/api/chat/update-status', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    
    await User.update(
      { lastOnline: new Date() },
      { where: { id: userId } }
    );

    res.json({ success: true, message: 'Status updated' });
  } catch (error) {
    console.error('Ошибка обновления статуса:', error);
    res.status(500).json({ error: error.message });
  }
});

// Удаление сообщения (только для администраторов или автора)
app.delete('/api/chat/messages/:messageId', authenticateToken, async (req, res) => {
  try {
    const { messageId } = req.params;
    const userId = req.user.userId;

    // Получаем информацию о пользователе
    const user = await User.findByPk(userId);
    const message = await ChatMessage.findByPk(messageId);

    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    // Проверяем права: автор сообщения или администратор
    if (message.userId !== userId && user.role !== '150') {
      return res.status(403).json({ error: 'Access denied' });
    }

    await message.destroy();
    res.json({ success: true, message: 'Message deleted' });
  } catch (error) {
    console.error('Ошибка удаления сообщения:', error);
    res.status(500).json({ error: error.message });
  }
});

// Initialize database and start server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Database connected');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to database:', error);
  }
};

startServer();