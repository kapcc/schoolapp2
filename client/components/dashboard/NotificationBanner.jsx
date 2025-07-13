// src/components/dashboard/NotificationBanner.jsx

import React from 'react';

const NotificationBanner = ({ show, message, onClose }) => {
  const styles = {
    notiContainer: {
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      color: "white",
      padding: "16px 24px",
      borderRadius: "16px",
      marginBottom: "32px",
      textAlign: "center",
      fontWeight: "600",
      boxShadow: "0 8px 24px rgba(16, 185, 129, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      animation: "slideIn 0.3s ease"
    },

    closeButton: {
      background: "rgba(255, 255, 255, 0.2)",
      border: "none",
      borderRadius: "50%",
      width: "24px",
      height: "24px",
      color: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      fontWeight: "bold"
    }
  };

  if (!show) return null;

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div style={styles.notiContainer}>
        <span>{message}</span>
        <button 
          style={styles.closeButton}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
          }}
        >
          ×
        </button>
      </div>
    </>
  );
};

export default NotificationBanner;