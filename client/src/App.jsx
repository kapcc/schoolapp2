import { useState, useEffect } from "react";
import authService from "./authservice";
import Dashboard from "../components/dashboardTeacher/dashboardTeachers";
import AdminBoard from "../components/adminBoard1";

import AthenaHomepage from "../components/athenaHome";
import {Login } from "../components/loginPage";


const LoadingSpinner = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
      fontFamily: "Arial, sans-serif",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
    },
    spinnerContainer: {
      position: "relative",
      width: "48px",
      height: "48px",
    },
    spinnerOuter: {
      width: "48px",
      height: "48px",
      border: "4px solid #e5e7eb",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    spinnerInner: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "48px",
      height: "48px",
      border: "4px solid transparent",
      borderTop: "4px solid #2563eb",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    text: {
      color: "#6b7280",
      fontWeight: "500",
      fontSize: "16px",
      animation: "pulse 2s infinite",
    },
    dots: {
      display: "flex",
      gap: "4px",
    },
    dot: {
      width: "8px",
      height: "8px",
      backgroundColor: "#3b82f6",
      borderRadius: "50%",
      animation: "bounce 1.4s infinite",
    },
    dot2: {
      animationDelay: "0.1s",
    },
    dot3: {
      animationDelay: "0.2s",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
          }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.content}>
          {/* Анимированный спиннер */}
          <div style={styles.spinnerContainer}>
            <div style={styles.spinnerOuter}></div>
            <div style={styles.spinnerInner}></div>
          </div>

          {/* Текст с пульсацией */}
          <div style={styles.text}>Загрузка...</div>

          {/* Анимированные точки */}
          <div style={styles.dots}>
            <div style={styles.dot}></div>
            <div style={{ ...styles.dot, ...styles.dot2 }}></div>
            <div style={{ ...styles.dot, ...styles.dot3 }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

// Main App Component
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  useEffect(() => {
    // Check if user is logged in on app start
    const token = authService.getToken();
    const savedUser = authService.getCurrentUser();
    setCurrentPage("home");
    if (token && savedUser) {
      setUser(savedUser);
    }
    setLoading(false);
  }, []);

  const handleLogin = () => {
    const savedUser = authService.getCurrentUser();
    setUser(savedUser);
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      {user ? (
        user.role == "150" ? (
          <AdminBoard onLogout={handleLogout}></AdminBoard>
        ) : (
          <Dashboard user={user} onLogout={handleLogout} />
        )
      ) : currentPage == "home" ? (
        <AthenaHomepage setCurrentPage={setCurrentPage}></AthenaHomepage>
      ) : (
        <Login onLogin={handleLogin} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
