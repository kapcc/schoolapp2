// src/components/dashboard/ProfileSection.jsx

import React from 'react';
import { User } from 'lucide-react';

const ProfileSection = ({ 
  dataTabla, 
  isLoading, 
  isMobile, 
  translations, 
  language, 
  onFieldChange, 
  onSave 
}) => {
  const t = translations[language];

  const styles = {
    profileCard: {
      background: "white",
      borderRadius: "24px",
      padding: isMobile ? "24px" : "40px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      border: "1px solid rgba(255,255,255,0.1)",
    },

    profileTitle: {
      fontSize: isMobile ? "24px" : "28px",
      fontWeight: "700",
      color: "#1a1a1a",
      marginBottom: "32px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },

    formRow: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "24px",
      marginBottom: "32px",
    },

    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },

    label: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#64748b",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },

    input: {
      padding: "16px 20px",
      border: "2px solid #f1f5f9",
      borderRadius: "16px",
      fontSize: "16px",
      backgroundColor: "#fafbfc",
      transition: "all 0.3s ease",
      outline: "none",
      fontWeight: "500",
      width: "100%",
      boxSizing: "border-box",
    },

    saveButton: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      border: "none",
      padding: "16px 32px",
      borderRadius: "16px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 24px rgba(102, 126, 234, 0.3)",
      width: isMobile ? "100%" : "auto",
    },

    loadingText: {
      textAlign: "center",
      color: "#64748b",
      fontSize: "16px",
      padding: "40px",
    },
  };

  const formFields = [
    { key: "email", type: "email" },
    { key: "firstName", type: "text" },
    { key: "lastName", type: "text" },
    { key: "phone", type: "tel" },
    { key: "city", type: "text" },
    { key: "workplace", type: "text" },
    { key: "position", type: "text" },
    { key: "birthDate", type: "date" },
  ];

  if (isLoading) {
    return (
      <div style={styles.profileCard}>
        <div style={styles.loadingText}>Загрузка данных...</div>
      </div>
    );
  }

  if (!dataTabla || !dataTabla.user) {
    return (
      <div style={styles.profileCard}>
        <div style={styles.loadingText}>Данные не найдены</div>
      </div>
    );
  }

  return (
    <div style={styles.profileCard}>
      <h2 style={styles.profileTitle}>
        <User size={28} color="#667eea" />
        {t.personalInfo}
      </h2>

      <div style={styles.formRow}>
        {formFields.map(({ key, type }) => (
          <div key={key} style={styles.formGroup}>
            <label style={styles.label}>{t[key]}</label>
            <input
              type={type}
              style={styles.input}
              value={
                key === "birthDate" && dataTabla.user[key]
                  ? dataTabla.user[key].split("T")[0]
                  : dataTabla.user[key] || ""
              }
              onChange={(e) => onFieldChange(`user.${key}`, e.target.value)}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.backgroundColor = "white";
                e.target.style.transform = "scale(1.02)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#f1f5f9";
                e.target.style.backgroundColor = "#fafbfc";
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>
        ))}
      </div>

      <button
        style={styles.saveButton}
        onClick={onSave}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 12px 32px rgba(102, 126, 234, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 8px 24px rgba(102, 126, 234, 0.3)";
        }}
      >
        {t.saveChanges}
      </button>
    </div>
  );
};

export default ProfileSection;