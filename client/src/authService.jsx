import axios from "axios";
const API_URL = "http://localhost:5000/api";

// Configure axios defaults
axios.defaults.baseURL = API_URL;

// Auth service
const authService = {
  login: async (email, password) => {
    const response = await axios.post("/login", { email, password });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
  },

  register: async (email, password) => {
    const response = await axios.post("/register", { email, password });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },

  getToken: () => {
    return localStorage.getItem("token");
  },

  getProfile: async () => {
    const token = authService.getToken();
    const response = await axios.get("/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  checkRoles: async () => {
    const checkToken = authService.getToken();
    const response = await axios.get("/checkRoles", {
      headers: { Authorization: `Bearer ${checkToken}` },
    });
    const storedData = localStorage.getItem("user");
    const dataObj = JSON.parse(storedData);
    dataObj.role = response.data.role;
    localStorage.setItem("user", JSON.stringify(dataObj));
  },

  // Админ загружает данные в панели
  getTableAdmin: async () => {
    const token = authService.getToken();
    const response = await axios.get("/getTableData", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  // Админ сохраняет данные в панели
  savePostGres: async (dataTabla, setNotiShow) => {
    try {
      const response = await axios.put("/updateAdminUsers", dataTabla);
      console.log("Успешно!", response.data);
      setNotiShow(true);
    } catch (error) {
      console.error("Ошибка:", error.response?.data);
    }
  },

  // Пользователь сохраняет свои данные
  savePostGresTeacher: async (dataTabla, setNotiShow) => {
    try {
      const token = authService.getToken();
      const response = await axios.put(
        "/updateProfileTeacher",
        dataTabla,
        {
          headers: { 
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Данные успешно обновлены:", response.data);
      setNotiShow(true);
      return response.data;
    } catch (error) {
      console.error("Ошибка при обновлении:", error.response?.data || error.message);
      throw error;
    }
  },

  // НОВЫЕ МЕТОДЫ ДЛЯ ЧАТА

  // Получение сообщений чата
  getChatMessages: async () => {
    try {
      const token = authService.getToken();
      const response = await axios.get("/chat/messages", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Ошибка получения сообщений:", error.response?.data || error.message);
      throw error;
    }
  },

  // Отправка сообщения в чат
  sendChatMessage: async (messageData) => {
    try {
      const token = authService.getToken();
      const response = await axios.post("/chat/messages", messageData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });
      return response.data;
    } catch (error) {
      console.error("Ошибка отправки сообщения:", error.response?.data || error.message);
      throw error;
    }
  },

  // Получение списка онлайн пользователей
  getOnlineUsers: async () => {
    try {
      const token = authService.getToken();
      const response = await axios.get("/chat/online-users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Ошибка получения онлайн пользователей:", error.response?.data || error.message);
      throw error;
    }
  },

  // Обновление статуса "онлайн"
  updateOnlineStatus: async () => {
    try {
      const token = authService.getToken();
      const response = await axios.post("/chat/update-status", {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Ошибка обновления статуса:", error.response?.data || error.message);
      throw error;
    }
  }
};

export default authService;