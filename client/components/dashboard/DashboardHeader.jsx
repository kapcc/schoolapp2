// src/components/dashboard/DashboardHeader.jsx

import React from 'react';
import { LogOut } from 'lucide-react';

const DashboardHeader = ({ language, onLanguageChange, onLogout, translations }) => {
  const t = translations[language];

  const styles = {
    topHeader: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      padding: "16px 24px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      zIndex: 1001,
    },

    logoSection: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },

    logo: {
      width: "40px",
      height: "40px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
      boxShadow: "0 4px 16px rgba(102, 126, 234, 0.3)",
    },

    headerRight: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },

    languageSelector: {
      display: "flex",
      gap: "4px",
      background: "#f8fafc",
      padding: "4px",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
    },

    languageButton: {
      padding: "8px 12px",
      border: "none",
      borderRadius: "8px",
      fontSize: "12px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease",
      textTransform: "uppercase",
    },

    languageButtonActive: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
    },

    languageButtonInactive: {
      background: "transparent",
      color: "#64748b",
    },

    logoutButton: {
      background: "#fee2e2",
      color: "#dc2626",
      border: "none",
      padding: "10px 16px",
      borderRadius: "12px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
  };

  return (
    <div style={styles.topHeader}>
      <div style={styles.logoSection}>
        <div style={styles.logo}>A</div>
      </div>

      <div style={styles.headerRight}>
        <div style={styles.languageSelector}>
          {["ru", "en", "kz"].map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              style={{
                ...styles.languageButton,
                ...(language === lang
                  ? styles.languageButtonActive
                  : styles.languageButtonInactive),
              }}
            >
              {lang}
            </button>
          ))}
        </div>

        <button
          style={styles.logoutButton}
          onClick={onLogout}
          onMouseEnter={(e) => {
            e.target.style.background = "#fecaca";
            e.target.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#fee2e2";
            e.target.style.transform = "scale(1)";
          }}
        >
          <LogOut size={16} />
          {t.logout}
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;