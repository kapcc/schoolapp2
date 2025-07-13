import React, { useState, useEffect } from "react";
import { Mail, Lock, Loader2, Terminal, Globe, ArrowLeft, Rocket, Zap, Brain, Shield } from "lucide-react";
import authService from "../src/authservice";

export const Login = ({ onLogin, setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [userType, setUserType] = useState("user");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("ru");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
    }));
    setParticles(newParticles);
  }, []);

  const translations = {
    ru: {
      welcome: "С возвращением!",
      createAccount: "Создание аккаунта",
      createStudentAccount: "Регистрация ученика",
      createTeacherAccount: "Регистрация учителя",
      startJourney: "Добро пожаловать в мир программирования",
      continueStudy: "Войдите для продолжения обучения",
      email: "Email адрес",
      password: "Пароль",
      loading: "Подключение...",
      signUp: "Зарегистрироваться",
      signIn: "Войти в систему",
      asStudent: "Как ученик",
      asTeacher: "Как учитель",
      haveAccount: "Уже есть аккаунт? Войти",
      noAccount: "Нет аккаунта? Создать",
      terms: "Продолжая, вы соглашаетесь с",
      termsOfUse: "Условиями использования",
      and: "и",
      privacyPolicy: "Политикой конфиденциальности",
      platform: "Happy Choice Programming School",
      buttonCurrentPage: "← Вернуться на главную",
      systemAccess: "Доступ к системе",
      chooseRole: "Выберите свою роль"
    },
    en: {
      welcome: "Welcome back!",
      createAccount: "Create Account",
      createStudentAccount: "Student Registration",
      createTeacherAccount: "Teacher Registration",
      startJourney: "Welcome to the world of programming",
      continueStudy: "Sign in to continue learning",
      email: "Email address",
      password: "Password",
      loading: "Connecting...",
      signUp: "Sign Up",
      signIn: "Sign In",
      asStudent: "As Student",
      asTeacher: "As Teacher",
      haveAccount: "Already have an account? Sign In",
      noAccount: "Don't have an account? Create",
      terms: "By continuing, you agree to",
      termsOfUse: "Terms of Use",
      and: "and",
      privacyPolicy: "Privacy Policy",
      platform: "Happy Choice Programming School",
      buttonCurrentPage: "← Return to home",
      systemAccess: "System Access",
      chooseRole: "Choose your role"
    },
    kz: {
      welcome: "Қайтып келуіңізбен!",
      createAccount: "Аккаунт құру",
      createStudentAccount: "Оқушы тіркелуі",
      createTeacherAccount: "Мұғалім тіркелуі",
      startJourney: "Бағдарламалау әлеміне қош келдіңіз",
      continueStudy: "Оқуды жалғастыру үшін кіріңіз",
      email: "Email мекенжайы",
      password: "Құпия сөз",
      loading: "Қосылуда...",
      signUp: "Тіркелу",
      signIn: "Кіру",
      asStudent: "Оқушы ретінде",
      asTeacher: "Мұғалім ретінде",
      haveAccount: "Аккаунтыңыз бар ма? Кіру",
      noAccount: "Аккаунтыңыз жоқ па? Құру",
      terms: "Жалғастыра отырып, сіз келісесіз",
      termsOfUse: "Пайдалану шарттарымен",
      and: "және",
      privacyPolicy: "Құпиялылық саясатымен",
      platform: "Happy Choice Programming School",
      buttonCurrentPage: "← Басты бетке оралу",
      systemAccess: "Жүйеге кіру",
      chooseRole: "Рөліңізді таңдаңыз"
    },
  };

  const t = translations[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isRegister) {
        await authService.register(email, password, userType);
      } else {
        await authService.login(email, password);
      }
      onLogin();
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: `
        radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 20% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)
      `,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Space Grotesk', 'Exo 2', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },

    cursor: {
      position: 'fixed',
      width: '20px',
      height: '20px',
      background: 'radial-gradient(circle, #00d4ff 0%, #0099cc 100%)',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 9999,
      transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
      transition: 'transform 0.1s ease',
      boxShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff',
      opacity: 0.7
    },

    particles: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1
    },

    particle: {
      position: 'absolute',
      background: 'linear-gradient(45deg, #00d4ff, #4ecdc4)',
      borderRadius: '50%',
      opacity: 0.1,
      animation: 'particleFloat 20s infinite linear'
    },

    backButton: {
      position: 'absolute',
      top: '2rem',
      left: '2rem',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(0, 212, 255, 0.3)',
      borderRadius: '15px',
      padding: '0.8rem 1.5rem',
      color: '#ffffff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(20px)',
      zIndex: 10
    },

    card: {
      position: "relative",
      width: "100%",
      maxWidth: "480px",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(30px)",
      borderRadius: "30px",
      padding: "3rem 2.5rem",
      border: "1px solid rgba(0, 212, 255, 0.2)",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
      zIndex: 5
    },

    logoContainer: {
      textAlign: "center",
      marginBottom: "2.5rem",
    },

    logoIcon: {
      width: "100px",
      height: "100px",
      background: "linear-gradient(135deg, #00d4ff 0%, #4ecdc4 50%, #ff6b6b 100%)",
      borderRadius: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 1.5rem",
      fontSize: "2.5rem",
      color: "#000000",
      fontWeight: "900",
      transition: "all 0.3s ease",
      cursor: "pointer",
      boxShadow: "0 15px 35px rgba(0, 212, 255, 0.4)"
    },

    platformName: {
      fontSize: "1.8rem",
      fontWeight: "800",
      fontFamily: "'Orbitron', 'Space Grotesk', monospace",
      background: "linear-gradient(135deg, #00d4ff 0%, #4ecdc4 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      margin: "0 0 0.5rem 0",
      letterSpacing: "0.02em"
    },

    platformTagline: {
      fontSize: "0.9rem",
      fontWeight: "500",
      color: "rgba(255, 255, 255, 0.6)",
      textTransform: "uppercase",
      letterSpacing: "2px",
      margin: 0
    },

    formHeader: {
      textAlign: "center",
      marginBottom: "2.5rem",
    },

    title: {
      fontSize: "2.2rem",
      fontWeight: "700",
      fontFamily: "'Exo 2', sans-serif",
      color: "#ffffff",
      margin: "0 0 0.5rem 0",
      letterSpacing: "-0.01em"
    },

    subtitle: {
      fontSize: "1rem",
      color: "rgba(255, 255, 255, 0.7)",
      margin: "0 0 1.5rem 0",
      fontWeight: "400",
      lineHeight: 1.4
    },

    languageSelector: {
      display: "flex",
      justifyContent: "center",
      gap: "0.5rem",
      marginBottom: "2rem",
      background: "rgba(0, 212, 255, 0.1)",
      borderRadius: "20px",
      padding: "0.5rem",
      border: "1px solid rgba(0, 212, 255, 0.2)"
    },

    langButton: {
      padding: "0.5rem 1rem",
      background: "transparent",
      border: "none",
      borderRadius: "15px",
      color: "rgba(255, 255, 255, 0.6)",
      fontSize: "0.8rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    },

    langButtonActive: {
      background: "linear-gradient(135deg, #00d4ff, #4ecdc4)",
      color: "#000000",
      boxShadow: "0 4px 15px rgba(0, 212, 255, 0.3)"
    },

    userTypeSelector: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "20px",
      padding: "0.5rem",
      border: "1px solid rgba(255, 255, 255, 0.1)"
    },

    userTypeButton: {
      flex: 1,
      padding: "1rem",
      background: "transparent",
      border: "none",
      borderRadius: "15px",
      color: "rgba(255, 255, 255, 0.6)",
      fontSize: "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem"
    },

    userTypeButtonActive: {
      background: "linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 107, 107, 0.1))",
      color: "#ffffff",
      border: "1px solid rgba(255, 107, 107, 0.3)",
      boxShadow: "0 8px 25px rgba(255, 107, 107, 0.2)"
    },

    inputContainer: {
      position: "relative",
      marginBottom: "1.5rem",
    },

    inputIcon: {
      position: "absolute",
      left: "1.2rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: "rgba(0, 212, 255, 0.6)",
      zIndex: 2
    },

    input: {
      width: "100%",
      padding: "1.2rem 1.2rem 1.2rem 3.5rem",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(0, 212, 255, 0.2)",
      borderRadius: "18px",
      color: "#ffffff",
      fontSize: "1rem",
      fontWeight: "500",
      outline: "none",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
      backdropFilter: "blur(10px)"
    },

    inputFocus: {
      background: "rgba(255, 255, 255, 0.08)",
      borderColor: "rgba(0, 212, 255, 0.5)",
      boxShadow: "0 0 0 3px rgba(0, 212, 255, 0.1), 0 8px 25px rgba(0, 212, 255, 0.2)",
      transform: "scale(1.02)"
    },

    error: {
      background: "rgba(255, 107, 107, 0.15)",
      border: "1px solid rgba(255, 107, 107, 0.3)",
      borderRadius: "15px",
      padding: "1rem",
      color: "#ff6b6b",
      fontSize: "0.9rem",
      fontWeight: "500",
      marginBottom: "1.5rem",
      textAlign: "center",
      backdropFilter: "blur(10px)"
    },

    submitButton: {
      width: "100%",
      padding: "1.3rem",
      background: "linear-gradient(135deg, #00d4ff 0%, #4ecdc4 100%)",
      border: "none",
      borderRadius: "18px",
      color: "#000000",
      fontSize: "1.1rem",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginBottom: "1.5rem",
      boxShadow: "0 15px 35px rgba(0, 212, 255, 0.4)",
      fontFamily: "'Space Grotesk', sans-serif",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      position: "relative",
      overflow: "hidden"
    },

    submitButtonDisabled: {
      opacity: "0.6",
      cursor: "not-allowed",
      transform: "none",
    },

    toggleButton: {
      width: "100%",
      padding: "1rem",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "15px",
      color: "rgba(255, 255, 255, 0.8)",
      fontSize: "0.95rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backdropFilter: "blur(10px)"
    },

    footer: {
      textAlign: "center",
      marginTop: "2rem",
      fontSize: "0.8rem",
      color: "rgba(255, 255, 255, 0.5)",
      lineHeight: 1.5
    },

    link: {
      color: "#00d4ff",
      textDecoration: "none",
      transition: "color 0.3s ease",
      fontWeight: "500"
    },

    spinner: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem"
    }
  };

  const [hoveredLogo, setHoveredLogo] = useState(false);
  const [hoveredSubmit, setHoveredSubmit] = useState(false);
  const [hoveredToggle, setHoveredToggle] = useState(false);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [hoveredLang, setHoveredLang] = useState(null);

  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
          
          @keyframes particleFloat {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
            50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.3); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          input::placeholder {
            color: rgba(255, 255, 255, 0.4);
            font-weight: 400;
          }
          
          .button-shine::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }
          
          .button-shine:hover::before {
            left: 100%;
          }
          
          /* Scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #0a0a0a;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #00d4ff, #4ecdc4);
            border-radius: 4px;
          }
        `}
      </style>

      {/* Custom Cursor */}
      <div style={styles.cursor}></div>

      {/* Animated Particles */}
      <div style={styles.particles}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.speed * 10}s`,
              animationDelay: `${particle.id * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => setCurrentPage("home")}
        style={{
          ...styles.backButton,
          ...(hoveredBack ? {
            background: 'rgba(0, 212, 255, 0.2)',
            borderColor: 'rgba(0, 212, 255, 0.5)',
            transform: 'translateX(-5px)'
          } : {})
        }}
        onMouseEnter={() => setHoveredBack(true)}
        onMouseLeave={() => setHoveredBack(false)}
      >
        <ArrowLeft size={18} />
        {t.buttonCurrentPage}
      </button>

      <div style={styles.card}>
        {/* Language Selector */}
        <div style={styles.languageSelector}>
          <Globe size={16} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
          {["ru", "en", "kz"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              onMouseEnter={() => setHoveredLang(lang)}
              onMouseLeave={() => setHoveredLang(null)}
              style={{
                ...styles.langButton,
                ...(language === lang ? styles.langButtonActive : {}),
                ...(hoveredLang === lang && language !== lang ? {
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.9)'
                } : {})
              }}
            >
              {lang === "ru" ? "🇷🇺 RU" : lang === "en" ? "🇬🇧 EN" : "🇰🇿 KZ"}
            </button>
          ))}
        </div>

        {/* Logo */}
        <div style={styles.logoContainer}>
          <div
            style={{
              ...styles.logoIcon,
              ...(hoveredLogo ? {
                transform: 'scale(1.1) rotateY(10deg)',
                boxShadow: '0 20px 50px rgba(0, 212, 255, 0.6)'
              } : {})
            }}
            onMouseEnter={() => setHoveredLogo(true)}
            onMouseLeave={() => setHoveredLogo(false)}
          >
            <Terminal size={40} />
          </div>
          <h1 style={styles.platformName}>Happy Choice</h1>
          <p style={styles.platformTagline}>{t.systemAccess}</p>
        </div>

        {/* Form Header */}
        <div style={styles.formHeader}>
          <h2 style={styles.title}>
            {isRegister 
              ? (userType === 'student' ? t.createStudentAccount : t.createTeacherAccount)
              : t.welcome
            }
          </h2>
          <p style={styles.subtitle}>
            {isRegister ? t.startJourney : t.continueStudy}
          </p>
        </div>

        {/* User Type Selector (only for registration) */}
        {isRegister && (
          <>
            <p style={{ 
              textAlign: 'center', 
              color: 'rgba(255, 255, 255, 0.7)', 
              marginBottom: '1rem',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}>
              {t.chooseRole}
            </p>
            <div style={styles.userTypeSelector}>
              <button
                type="button"
                onClick={() => setUserType('student')}
                style={{
                  ...styles.userTypeButton,
                  ...(userType === 'student' ? styles.userTypeButtonActive : {})
                }}
              >
                <Brain size={24} />
                {t.asStudent}
              </button>
              <button
                type="button"
                onClick={() => setUserType('user')}
                style={{
                  ...styles.userTypeButton,
                  ...(userType === 'user' ? styles.userTypeButtonActive : {})
                }}
              >
                <Shield size={24} />
                {t.asTeacher}
              </button>
            </div>
          </>
        )}

        {/* Email Input */}
        <div style={styles.inputContainer}>
          <Mail size={20} style={styles.inputIcon} />
          <input
            type="email"
            placeholder={t.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusedEmail(true)}
            onBlur={() => setFocusedEmail(false)}
            required
            style={{
              ...styles.input,
              ...(focusedEmail ? styles.inputFocus : {})
            }}
          />
        </div>

        {/* Password Input */}
        <div style={styles.inputContainer}>
          <Lock size={20} style={styles.inputIcon} />
          <input
            type="password"
            placeholder={t.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
            required
            style={{
              ...styles.input,
              ...(focusedPassword ? styles.inputFocus : {})
            }}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div style={styles.error}>
            <Zap size={16} style={{ marginRight: '0.5rem' }} />
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="button-shine"
          style={{
            ...styles.submitButton,
            ...(hoveredSubmit && !loading ? {
              transform: 'translateY(-3px) scale(1.02)',
              boxShadow: '0 20px 45px rgba(0, 212, 255, 0.6)'
            } : {}),
            ...(loading ? styles.submitButtonDisabled : {})
          }}
          onMouseEnter={() => setHoveredSubmit(true)}
          onMouseLeave={() => setHoveredSubmit(false)}
        >
          {loading ? (
            <span style={styles.spinner}>
              <Loader2
                size={20}
                style={{ animation: "spin 1s linear infinite" }}
              />
              {t.loading}
            </span>
          ) : (
            <span style={styles.spinner}>
              <Rocket size={20} />
              {isRegister ? t.signUp : t.signIn}
            </span>
          )}
        </button>

        {/* Toggle Button */}
        <button
          onClick={() => {
            setIsRegister(!isRegister);
            setError("");
          }}
          style={{
            ...styles.toggleButton,
            ...(hoveredToggle ? {
              background: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              transform: 'translateY(-2px)'
            } : {})
          }}
          onMouseEnter={() => setHoveredToggle(true)}
          onMouseLeave={() => setHoveredToggle(false)}
        >
          {isRegister ? t.haveAccount : t.noAccount}
        </button>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={{ margin: "0 0 0.5rem 0" }}>{t.terms}</p>
          <div>
            <a href="#" style={styles.link}>{t.termsOfUse}</a>
            <span style={{ margin: "0 0.5rem", color: 'rgba(255, 255, 255, 0.3)' }}>{t.and}</span>
            <a href="#" style={styles.link}>{t.privacyPolicy}</a>
          </div>
        </div>
      </div>
    </div>
  );
};