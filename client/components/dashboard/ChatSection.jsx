// src/components/dashboard/ChatSection.jsx

import React from 'react';
import { MessageCircle } from 'lucide-react';
import Chat from './chat/chat';

const ChatSection = ({ 
  user, 
  dataTabla, 
  isMobile, 
  translations, 
  language 
}) => {
  const t = translations[language];

  const styles = {
    chatSection: {
      background: "white",
      borderRadius: "24px",
      padding: isMobile ? "24px" : "40px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      border: "1px solid rgba(255,255,255,0.1)",
    },

    chatTitle: {
      fontSize: isMobile ? "24px" : "28px",
      fontWeight: "700",
      color: "#1a1a1a",
      marginBottom: "32px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
  };

  return (
    <div style={styles.chatSection}>
      <h2 style={styles.chatTitle}>
        <MessageCircle size={28} color="#667eea" />
        {t.chatTitle}
      </h2>
      <Chat user={dataTabla?.user || user} />
    </div>
  );
};

export default ChatSection;