// src/components/dashboard/DashboardSidebar.jsx

import React, { useEffect, useState } from 'react';
import { User, BookOpen, MessageCircle, Star,ShoppingBasket } from 'lucide-react';
import HappyCoin from '../../imgs/happycoin.png'
const DashboardSidebar = ({ 
  activeSection, 
  onMenuClick, 
  isMobile, 
  translations, 
  language ,
  user
}) => {
  const t = translations[language];

const [menuItems, setMenuItems] =useState([
  { id: "progress", icon: Star, label: "progress" },
  { id: "profile", icon: User, label: "myProfile" },
  { id: "study", icon: BookOpen, label: "study" },
  { id: "chat", icon: MessageCircle, label: "chat" },
  { id: "shop", icon: ShoppingBasket, label: "shop" },
  { id: "quiz", icon: ShoppingBasket, label: "shop" },



]) ;
useEffect(()=>{
  if (user.role == "200") {
    const filteredMenuItems = user.role == "200" 
    ? menuItems.filter(item => item.id !== "study")
    : [...menuItems];
    setMenuItems(filteredMenuItems)
    onMenuClick("progress")
  }
  if (user.role == "100") {
    const filteredMenuItems = user.role == "100" 
    ? menuItems.filter(item => item.id !== "progress")
    : [...menuItems];
    setMenuItems(filteredMenuItems)
    onMenuClick("profile")
  }
},[])
  const styles = {
    sidebar: {
      width: isMobile ? "100%" : "320px",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      borderRight: isMobile ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
      display: "flex",
      flexDirection: "column",
      position: isMobile ? "relative" : "sticky",
      top: isMobile ? 0 : "72px",
      height: isMobile ? "auto" : "calc(100vh - 72px)",
      zIndex: 1000,
      boxShadow: isMobile ? "none" : "0 8px 32px rgba(0,0,0,0.08)",
    },

    menuHeader: {
      padding: isMobile ? "20px" : "32px 24px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    },

    menuTitle: {
      margin: 0,
      fontSize: isMobile ? "18px" : "20px",
      fontWeight: "700",
      color: "#1a1a1a",
    },

    navigation: {
      flex: 1,
      padding: "24px",
    },

    menuButton: {
      width: "100%",
      padding: "16px 20px",
      marginBottom: "8px",
      border: "none",
      borderRadius: "16px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      transition: "all 0.3s ease",
      background: "transparent",
      color: "#64748b",
      textAlign: "left",
    },

    menuButtonActive: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      transform: "scale(1.02)",
      boxShadow: "0 8px 24px rgba(102, 126, 234, 0.3)",
    },
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.menuHeader}>
        <h3 style={styles.menuTitle}>{t.personalCabinet}</h3>
      </div>

      <nav style={styles.navigation}>
        {menuItems.map(({ id, icon: Icon, label }) => (
          
          <button
            key={id}
            onClick={() => onMenuClick(id)}
            style={{
              ...styles.menuButton,
              ...(activeSection === id ? styles.menuButtonActive : {}),
            }}
            onMouseEnter={(e) => {
              if (activeSection !== id) {
                e.target.style.background = "#f8fafc";
                e.target.style.transform = "scale(1.02)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== id) {
                e.target.style.background = "transparent";
                e.target.style.transform = "scale(1)";
              }
            }}
          >
            <Icon size={20} />
            {t[label]}
            {id == "shop" && <img style={{width:25}} src={HappyCoin}></img>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebar;