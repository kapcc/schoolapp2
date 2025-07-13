import React, { useState } from 'react';
import { Trophy, Coins, Target, Calendar, Award, Star, TrendingUp, Clock, BookOpen, Flame, Gift, Zap, Heart } from 'lucide-react';

const MyProgressComponent = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [selectedTab, setSelectedTab] = useState('overview');

  // Заглушки данных
  const mockData = {
    stats: {
      lessonsCompleted: 24,
      projectsCreated: 8,
      currentStreak: 7,
      totalTimeHours: 45,
      happyCoins: 1250,
      totalAchievements: 12
    },
    achievements: [
      {
        id: 'first_lesson',
        name: 'Первый урок! 🎓',
        description: 'Завершил свой самый первый урок программирования',
        icon: '🎓',
        category: 'coding',
        coinsReward: 10,
        earned: true,
        earnedDate: '2024-10-15'
      },
      {
        id: 'week_streak',
        name: 'Неделя подряд! 🔥',
        description: 'Занимался программированием 7 дней подряд',
        icon: '🔥',
        category: 'persistence',
        coinsReward: 50,
        earned: true,
        earnedDate: '2024-11-20'
      },
      {
        id: 'first_project',
        name: 'Первый проект! 🚀',
        description: 'Создал и завершил свой первый проект',
        icon: '🚀',
        category: 'creativity',
        coinsReward: 25,
        earned: true,
        earnedDate: '2024-11-05'
      },
      {
        id: 'helper',
        name: 'Помощник! 🤝',
        description: 'Помог другому ученику решить задачу',
        icon: '🤝',
        category: 'collaboration',
        coinsReward: 15,
        earned: true,
        earnedDate: '2024-11-18'
      },
      {
        id: 'early_bird',
        name: 'Ранняя пташка! 🌅',
        description: 'Первым начал урок в своей группе',
        icon: '🌅',
        category: 'leadership',
        coinsReward: 20,
        earned: false
      },
      {
        id: 'creative_genius',
        name: 'Творческий гений! 🎨',
        description: 'Создал 5 уникальных проектов',
        icon: '🎨',
        category: 'creativity',
        coinsReward: 75,
        earned: false
      },
      {
        id: 'month_streak',
        name: 'Целый месяц! 📅',
        description: 'Занимался 30 дней подряд',
        icon: '📅',
        category: 'persistence',
        coinsReward: 100,
        earned: false
      },
      {
        id: 'quiz_master',
        name: 'Мастер викторин! 🧠',
        description: 'Правильно ответил на 50 вопросов',
        icon: '🧠',
        category: 'knowledge',
        coinsReward: 30,
        earned: false
      }
    ],
    recentActivity: [
      {
        type: 'earned',
        amount: 15,
        reason: 'Завершение урока "Создание анимации"',
        date: '2024-12-07',
        icon: '📚'
      },
      {
        type: 'earned',
        amount: 25,
        reason: 'Создание проекта "Космическая игра"',
        date: '2024-12-06',
        icon: '🚀'
      },
      {
        type: 'earned',
        amount: 10,
        reason: 'Ежедневная активность (7 день подряд)',
        date: '2024-12-06',
        icon: '🔥'
      },
      {
        type: 'spent',
        amount: 50,
        reason: 'Покупка нового аватара',
        date: '2024-12-05',
        icon: '🛒'
      },
      {
        type: 'earned',
        amount: 20,
        reason: 'Помощь другу с заданием',
        date: '2024-12-04',
        icon: '🤝'
      }
    ]
  };

  const styles = {
    container: {
      background: 'white',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      border: '1px solid rgba(255,255,255,0.1)',
      maxWidth: '100%',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },

    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },

    title: {
      fontSize: '32px',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    },

    subtitle: {
      fontSize: '16px',
      color: '#64748b',
      margin: 0
    },

    tabButtons: {
      display: 'flex',
      background: '#f1f5f9',
      borderRadius: '16px',
      padding: '4px',
      marginBottom: '32px',
      gap: '4px'
    },

    tabButton: {
      flex: 1,
      padding: '12px 16px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center'
    },

    tabButtonActive: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
    },

    tabButtonInactive: {
      background: 'transparent',
      color: '#64748b'
    },

    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginBottom: '40px'
    },

    statCard: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      borderRadius: '16px',
      padding: '24px',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '1px solid #e2e8f0'
    },

    statCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
    },

    statIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      fontSize: '20px'
    },

    statValue: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#1e293b',
      margin: '0 0 8px 0'
    },

    statLabel: {
      fontSize: '14px',
      color: '#64748b',
      fontWeight: '500',
      margin: 0
    },

    coinsSection: {
      background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
      borderRadius: '20px',
      padding: '32px',
      marginBottom: '40px',
      color: '#1a1a1a',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center'
    },

    coinsBackground: {
      position: 'absolute',
      top: '-30px',
      right: '-30px',
      fontSize: '120px',
      opacity: 0.1
    },

    coinsContent: {
      position: 'relative',
      zIndex: 2
    },

    coinsTitle: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    },

    coinsBalance: {
      fontSize: '48px',
      fontWeight: '900',
      marginBottom: '16px',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },

    coinsDescription: {
      fontSize: '16px',
      opacity: 0.8,
      marginBottom: '0'
    },

    achievementsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px',
      marginBottom: '40px'
    },

    achievementCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      border: '2px solid #e2e8f0',
      transition: 'all 0.3s ease',
      position: 'relative',
      cursor: 'pointer'
    },

    achievementCardEarned: {
      borderColor: '#10b981',
      background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)'
    },

    achievementCardLocked: {
      borderColor: '#d1d5db',
      background: '#f9fafb',
      opacity: 0.6
    },

    achievementIcon: {
      fontSize: '48px',
      marginBottom: '16px',
      display: 'block'
    },

    achievementName: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '8px'
    },

    achievementDescription: {
      fontSize: '14px',
      color: '#64748b',
      lineHeight: '1.5',
      marginBottom: '16px'
    },

    achievementReward: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#f59e0b',
      background: '#fef3c7',
      padding: '8px 12px',
      borderRadius: '8px'
    },

    achievementBadge: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: '#10b981',
      color: 'white',
      borderRadius: '50%',
      width: '28px',
      height: '28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 'bold'
    },

    activitySection: {
      background: '#f8fafc',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #e2e8f0'
    },

    sectionTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },

    activityItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px 0',
      borderBottom: '1px solid #e2e8f0'
    },

    activityIcon: {
      width: '44px',
      height: '44px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      flexShrink: 0
    },

    activityContent: {
      flex: 1
    },

    activityText: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1e293b',
      margin: '0 0 4px 0'
    },

    activityDate: {
      fontSize: '12px',
      color: '#64748b',
      margin: 0
    },

    activityAmount: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#10b981'
    },

    progressBar: {
      width: '100%',
      height: '8px',
      background: '#e2e8f0',
      borderRadius: '4px',
      overflow: 'hidden',
      marginTop: '8px'
    },

    progressFill: {
      height: '100%',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      borderRadius: '4px',
      transition: 'width 0.3s ease'
    }
  };

  const StatCard = ({ icon, value, label, color, progress }) => (
    <div 
      style={styles.statCard}
      onMouseEnter={(e) => Object.assign(e.target.style, styles.statCardHover)}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
      }}
    >
      <div style={{
        ...styles.statIcon,
        background: `linear-gradient(135deg, ${color[0]} 0%, ${color[1]} 100%)`,
        color: 'white'
      }}>
        {icon}
      </div>
      <p style={styles.statValue}>{value}</p>
      <p style={styles.statLabel}>{label}</p>
      {progress !== undefined && (
        <div style={styles.progressBar}>
          <div style={{...styles.progressFill, width: `${progress}%`}}></div>
        </div>
      )}
    </div>
  );

  const AchievementCard = ({ achievement, isHovered, onHover }) => (
    <div
      style={{
        ...styles.achievementCard,
        ...(achievement.earned ? styles.achievementCardEarned : styles.achievementCardLocked),
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 12px 24px rgba(0,0,0,0.15)' : 'none'
      }}
      onMouseEnter={() => onHover(achievement.id)}
      onMouseLeave={() => onHover(null)}
    >
      {achievement.earned && (
        <div style={styles.achievementBadge}>
          ✨
        </div>
      )}
      
      <span style={styles.achievementIcon}>
        {achievement.icon}
      </span>
      
      <h4 style={styles.achievementName}>
        {achievement.name}
      </h4>
      
      <p style={styles.achievementDescription}>
        {achievement.description}
      </p>
      
      <div style={styles.achievementReward}>
        <Coins size={16} />
        +{achievement.coinsReward} монет
      </div>
      
      {achievement.earned && achievement.earnedDate && (
        <div style={{
          marginTop: '12px',
          fontSize: '12px',
          color: '#10b981',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Получено: {new Date(achievement.earnedDate).toLocaleDateString('ru-RU')}
        </div>
      )}
    </div>
  );

  const renderOverview = () => (
    <>
      {/* Статистика */}
      <div style={styles.statsGrid}>
        <StatCard 
          icon={<BookOpen size={24} />} 
          value={mockData.stats.lessonsCompleted} 
          label="Уроков завершено"
          color={['#667eea', '#764ba2']}
          progress={75}
        />
        <StatCard 
          icon={<Target size={24} />} 
          value={mockData.stats.projectsCreated} 
          label="Проектов создано"
          color={['#10b981', '#059669']}
        />
        <StatCard 
          icon={<Flame size={24} />} 
          value={mockData.stats.currentStreak} 
          label="Дней подряд"
          color={['#f59e0b', '#d97706']}
        />
        <StatCard 
          icon={<Clock size={24} />} 
          value={mockData.stats.totalTimeHours} 
          label="Часов изучено"
          color={['#8b5cf6', '#7c3aed']}
        />
      </div>

      {/* Happy Coins */}
      <div style={styles.coinsSection}>
        <div style={styles.coinsBackground}>🪙</div>
        <div style={styles.coinsContent}>
          <h3 style={styles.coinsTitle}>
            <Coins size={28} />
            Happy Coins
          </h3>
          <div style={styles.coinsBalance}>{mockData.stats.happyCoins}</div>
          <p style={styles.coinsDescription}>
            Зарабатывай монеты за достижения и активность! 🌟
          </p>
        </div>
      </div>
    </>
  );

  const renderAchievements = () => (
    <div style={styles.achievementsGrid}>
      {mockData.achievements.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
          isHovered={hoveredAchievement === achievement.id}
          onHover={setHoveredAchievement}
        />
      ))}
    </div>
  );

  const renderActivity = () => (
    <div style={styles.activitySection}>
      {mockData.recentActivity.map((activity, index) => (
        <div key={index} style={styles.activityItem}>
          <div style={{
            ...styles.activityIcon,
            background: activity.type === 'earned' 
              ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
              : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            color: 'white'
          }}>
            {activity.icon}
          </div>
          
          <div style={styles.activityContent}>
            <p style={styles.activityText}>
              {activity.reason}
            </p>
            <p style={styles.activityDate}>
              {new Date(activity.date).toLocaleDateString('ru-RU')}
            </p>
          </div>
          
          <div style={{
            ...styles.activityAmount,
            color: activity.type === 'earned' ? '#10b981' : '#ef4444'
          }}>
            {activity.type === 'earned' ? '+' : '-'}{activity.amount} 🪙
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <TrendingUp size={32} />
          Мой прогресс
        </h1>
        <p style={styles.subtitle}>
          Отслеживай свои успехи и зарабатывай награды! 🎯
        </p>
      </div>

      {/* Табы */}
      <div style={styles.tabButtons}>
        <button
          style={{
            ...styles.tabButton,
            ...(selectedTab === 'overview' ? styles.tabButtonActive : styles.tabButtonInactive)
          }}
          onClick={() => setSelectedTab('overview')}
        >
          📊 Обзор
        </button>
        <button
          style={{
            ...styles.tabButton,
            ...(selectedTab === 'achievements' ? styles.tabButtonActive : styles.tabButtonInactive)
          }}
          onClick={() => setSelectedTab('achievements')}
        >
          🏆 Достижения
        </button>
        <button
          style={{
            ...styles.tabButton,
            ...(selectedTab === 'activity' ? styles.tabButtonActive : styles.tabButtonInactive)
          }}
          onClick={() => setSelectedTab('activity')}
        >
          📈 Активность
        </button>
      </div>

      {/* Контент табов */}
      {selectedTab === 'overview' && renderOverview()}
      {selectedTab === 'achievements' && (
        <>
          <h3 style={styles.sectionTitle}>
            <Trophy size={24} color="#f59e0b" />
            Мои достижения ({mockData.achievements.filter(a => a.earned).length}/{mockData.achievements.length})
          </h3>
          {renderAchievements()}
        </>
      )}
      {selectedTab === 'activity' && (
        <>
          <h3 style={styles.sectionTitle}>
            <Calendar size={24} color="#64748b" />
            Недавняя активность
          </h3>
          {renderActivity()}
        </>
      )}
    </div>
  );
};

export default MyProgressComponent;