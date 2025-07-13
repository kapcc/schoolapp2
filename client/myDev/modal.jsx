import React, { useState } from "react";

const SimpleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div style={{
      padding: "50px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <button 
        onClick={openModal}
        style={{
          background: "linear-gradient(45deg, #ff6b6b, #ee5a24)",
          color: "white",
          border: "none",
          padding: "15px 30px",
          borderRadius: "50px",
          fontSize: "18px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 8px 25px rgba(238, 90, 36, 0.3)",
          transition: "all 0.3s ease",
          transform: "translateY(0)"
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-3px)";
          e.target.style.boxShadow = "0 12px 35px rgba(238, 90, 36, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 8px 25px rgba(238, 90, 36, 0.3)";
        }}
      >
        ✨ Открыть модальное окно
      </button>

      {isOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(10px)",
          zIndex: 1000,
          animation: "fadeIn 0.3s ease"
        }}>
          <div style={{
            background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
            padding: "40px",
            borderRadius: "20px",
            minWidth: "400px",
            maxWidth: "500px",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            position: "relative",
            animation: "slideUp 0.3s ease",
            border: "1px solid rgba(255, 255, 255, 0.2)"
          }}>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "18px",
                color: "#666",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 0, 0, 0.1)";
                e.target.style.color = "#ff4757";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.color = "#666";
              }}
            >
              ×
            </button>

            <div style={{
              textAlign: "center",
              marginBottom: "30px"
            }}>
              <div style={{
                fontSize: "48px",
                marginBottom: "15px"
              }}>
                🎉
              </div>
              <h2 style={{
                margin: "0 0 15px 0",
                background: "linear-gradient(45deg, #667eea, #764ba2)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "28px",
                fontWeight: "700"
              }}>
                Красивое модальное окно
              </h2>
              <p style={{
                color: "#666",
                fontSize: "16px",
                lineHeight: "1.6",
                margin: 0
              }}>
                Это стильное модальное окно с градиентами, тенями и анимацией. 
                Современный дизайн для улучшения пользовательского опыта.
              </p>
            </div>

            <div style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center"
            }}>
              <button 
                onClick={closeModal}
                style={{
                  background: "linear-gradient(45deg, #667eea, #764ba2)",
                  color: "white",
                  border: "none",
                  padding: "12px 25px",
                  borderRadius: "25px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 12px 25px rgba(102, 126, 234, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.3)";
                }}
              >
                Понятно
              </button>
              
              <button 
                style={{
                  background: "transparent",
                  color: "#667eea",
                  border: "2px solid #667eea",
                  padding: "12px 25px",
                  borderRadius: "25px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#667eea";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#667eea";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
      `}</style>
    </div>
  );
};

export default SimpleModal;