// Этот файл нужно создать по пути: src/components/chat/Chat.jsx

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Send, MessageCircle, Users, Clock, Smile } from 'lucide-react';
import authService from "../../../src/authservice"

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Переводы
  const translations = {
    ru: {
      chatTitle: 'Общий чат',
      onlineUsers: 'Пользователи онлайн',
      typePlaceholder: 'Введите сообщение...',
      send: 'Отправить',
      today: 'Сегодня',
      yesterday: 'Вчера',
      noMessages: 'Пока нет сообщений',
      startConversation: 'Начните общение!',
      connecting: 'Подключение...',
      you: 'Вы'
    },
    en: {
      chatTitle: 'General Chat',
      onlineUsers: 'Online Users',
      typePlaceholder: 'Type a message...',
      send: 'Send',
      today: 'Today',
      yesterday: 'Yesterday',
      noMessages: 'No messages yet',
      startConversation: 'Start the conversation!',
      connecting: 'Connecting...',
      you: 'You'
    },
    kz: {
      chatTitle: 'Жалпы чат',
      onlineUsers: 'Онлайн пайдаланушылар',
      typePlaceholder: 'Хабарлама жазыңыз...',
      send: 'Жіберу',
      today: 'Бүгін',
      yesterday: 'Кеше',
      noMessages: 'Әзірше хабарлама жоқ',
      startConversation: 'Сөйлесуді бастаңыз!',
      connecting: 'Қосылуда...',
      you: 'Сіз'
    }
  };

  const [language] = useState('ru'); // Можно брать из пропсов или контекста
  const t = translations[language];

  // Автопрокрутка к последнему сообщению
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Загрузка сообщений
  const loadMessages = useCallback(async () => {
    try {

      const response = await authService.getChatMessages();
      setMessages(response.messages || []);
      setOnlineUsers(response.onlineUsers || []);
    } catch (error) {
      console.error('Ошибка загрузки сообщений:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Отправка сообщения
  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;

    try {
      const messageData = {
        text: newMessage.trim(),
        userId: user.id,
        userName: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email
      };

      await authService.sendChatMessage(messageData);
      setNewMessage('');
      
      // Обновляем сообщения
      await loadMessages();
    } catch (error) {
      console.error('Ошибка отправки сообщения:', error);
    }
  };

  // Форматирование времени
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (messageDate.getTime() === today.getTime()) {
      return `${t.today} ${date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`;
    } else if (messageDate.getTime() === yesterday.getTime()) {
      return `${t.yesterday} ${date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    }
  };

  // Загрузка сообщений при монтировании
  useEffect(() => {
    loadMessages();
    
    // Обновление каждые 3 секунды (можно заменить на WebSocket)
    const interval = setInterval(loadMessages, 3000);
    
    return () => clearInterval(interval);
  }, [loadMessages]);

  const styles = {
    chatContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '600px',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(255,255,255,0.2)'
    },
    
    chatHeader: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    
    chatTitle: {
      margin: 0,
      fontSize: '18px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    
    onlineCount: {
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '12px',
      padding: '4px 12px',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    
    messagesContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px',
      background: '#fafbfc'
    },
    
    messagesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    
    message: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '85%',
      animation: 'slideIn 0.3s ease',
      alignSelf: 'flex-start',
      alignItems: 'flex-start'
    },
    
    messageContent: {
      background: 'white',
      padding: '12px 16px',
      borderRadius: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#e2e8f0' // явно задаем цвет границы
    },
    
    messageContentOwn: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent' // или нужный вам цвет
    },
    
    messageText: {
      margin: 0,
      fontSize: '14px',
      lineHeight: '1.4',
      wordWrap: 'break-word'
    },
    
    messageInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      margin: '6px 0 0 0',
      fontSize: '12px',
      color: '#64748b'
    },
    
    messageAuthor: {
      fontWeight: '700',
      fontSize: '13px'
    },
    
    inputContainer: {
      background: 'white',
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: '#e2e8f0',
      padding: '16px 20px'
    },
    
    inputForm: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-end'
    },
    
    messageInput: {
      flex: 1,
      padding: '12px 16px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#f1f5f9', // явно задаем цвет границы
      borderRadius: '16px',
      fontSize: '14px',
      backgroundColor: '#fafbfc',
      transition: 'all 0.3s ease',
      outline: 'none',
      resize: 'none',
      minHeight: '20px',
      maxHeight: '100px',
      fontFamily: 'inherit'
    },
    
    sendButton: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '12px 16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '14px',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
    },
    
    sendButtonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    },
    
    emptyState: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: '#64748b',
      textAlign: 'center',
      gap: '12px'
    },
    
    emptyStateIcon: {
      background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
      borderRadius: '50%',
      padding: '20px',
      marginBottom: '8px'
    },
    
    loadingState: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px',
      color: '#64748b',
      gap: '8px'
    }
  };

  return (
    <div style={styles.chatContainer}>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .chat-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .chat-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
          }
          
          .chat-scrollbar::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 3px;
          }
          
          .chat-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }
        `}
      </style>
      
      {/* Заголовок чата */}
      <div style={styles.chatHeader}>
       
        <div style={styles.onlineCount}>
          <Users size={14} />
          {onlineUsers.length}
        </div>
      </div>

      {/* Область сообщений */}
      <div 
        ref={chatContainerRef}
        style={styles.messagesContainer}
        className="chat-scrollbar"
      >
        {isLoading ? (
          <div style={styles.loadingState}>
            <Clock size={20} />
            {t.connecting}
          </div>
        ) : messages.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyStateIcon}>
              <MessageCircle size={40} color="#64748b" />
            </div>
            <div>
              <p style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
                {t.noMessages}
              </p>
              <p style={{ margin: 0, fontSize: '14px' }}>
                {t.startConversation}
              </p>
            </div>
          </div>
        ) : (
          <div style={styles.messagesList}>
            {messages.map((message, index) => {
              const isOwn = message.userId === user.id;
              return (
                <div
                  key={message.id || index}
                  style={styles.message}
                >
                  <div
                    style={{
                      ...styles.messageContent,
                      ...(isOwn ? styles.messageContentOwn : {})
                    }}
                  >
                    <p style={styles.messageText}>{message.text}</p>
                  </div>
                  <div style={styles.messageInfo}>
                    <span style={{
                      ...styles.messageAuthor,
                      color: isOwn ? '#667eea' : '#1e293b'
                    }}>
                      {isOwn ? t.you : message.userName}
                    </span>
                    <span>•</span>
                    <span>{formatTime(message.createdAt)}</span>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Поле ввода */}
      <div style={styles.inputContainer}>
        <form onSubmit={sendMessage} style={styles.inputForm}>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage(e);
              }
            }}
            style={{
              ...styles.messageInput,
              ...(newMessage && {
                borderColor: '#667eea',
                backgroundColor: 'white'
              })
            }}
            placeholder={t.typePlaceholder}
            rows={1}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!newMessage.trim() || isLoading}
            style={{
              ...styles.sendButton,
              ...(!newMessage.trim() || isLoading ? styles.sendButtonDisabled : {})
            }}
            onMouseEnter={(e) => {
              if (!e.target.disabled) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
            }}
          >
            <Send size={16} />
            {t.send}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;