import React, { useState, useEffect, useRef } from 'react';
import { Code, BookOpen, Users, Award, ChevronRight, Globe, User, Terminal, Database, Cpu, GitBranch, Zap, Shield, Layers, Smartphone, Monitor, Server, Brain, Rocket, Star, Play, ArrowRight, CheckCircle, TrendingUp, Activity } from 'lucide-react';
import AthenaLogo from "../imgs/athena-logo.PNG"
const UltraModernAthenaHomepage = ({setCurrentPage}) => {
  const [currentLang, setCurrentLang] = useState('ru');
  const [codeText, setCodeText] = useState('');
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  const codeSnippets = [
    'const future = await AI.learn();',
    'function innovate() { return breakthrough; }',
    'let skills = [...experience, ...creativity];',
    'console.log("Building tomorrow, today!");',
    'class Developer extends Human { superpower = "code"; }'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentSnippet = codeSnippets[currentCodeIndex];
    let index = 0;
    setCodeText('');
    
    const typeInterval = setInterval(() => {
      if (index < currentSnippet.length) {
        setCodeText(currentSnippet.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentCodeIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translations = {
    ru: {
      nav: {
        cabinet: 'Войти в систему'
      },
      hero: {
        title: 'Образовательная платформа',
        subtitle: 'Happy Choice Programming School',
        description: 'Внутренняя образовательная экосистема для сети школ программирования. От создания игр до разработки веб-приложений - путешествие юных программистов начинается здесь!',
        cta: 'Начать обучение',
        stats: {
          students: '2К+ учеников',
          courses: '12+ курсов', 
          schools: '15+ филиалов',
          projects: '3К+ проектов'
        }
      },
      features: {
        title: 'Наши курсы для юных программистов',
        subtitle: 'От игр до профессиональной разработки',
        games: {
          title: 'Создание игр',
          desc: 'Roblox Studio, Scratch - первые шаги в геймдеве'
        },
        animation: {
          title: 'Анимация',
          desc: 'Scratch Jr, CoSpaces - оживляем персонажей'
        },
        web: {
          title: 'Веб-разработка',
          desc: 'HTML, CSS, JavaScript - создаем сайты'
        },
        bots: {
          title: 'Чат-боты',
          desc: 'Python, Telegram API - умные помощники'
        }
      },
      footer: {
        company: 'Happy Choice Programming School',
        description: 'Сеть школ программирования для детей. Развиваем таланты, воплощаем мечты в код.',
        rights: 'Все права защищены'
      }
    },
    en: {
      nav: {
        cabinet: 'Enter System'
      },
      hero: {
        title: 'Educational Platform',
        subtitle: 'Happy Choice Programming School',
        description: 'Internal educational ecosystem for programming school network. From game creation to web development - young programmers\' journey starts here!',
        cta: 'Start Learning',
        stats: {
          students: '2K+ Students',
          courses: '12+ Courses',
          schools: '15+ Branches',
          projects: '3K+ Projects'
        }
      },
      features: {
        title: 'Our Courses for Young Programmers',
        subtitle: 'From games to professional development',
        games: {
          title: 'Game Creation',
          desc: 'Roblox Studio, Scratch - first steps in gamedev'
        },
        animation: {
          title: 'Animation',
          desc: 'Scratch Jr, CoSpaces - bringing characters to life'
        },
        web: {
          title: 'Web Development',
          desc: 'HTML, CSS, JavaScript - creating websites'
        },
        bots: {
          title: 'Chat Bots',
          desc: 'Python, Telegram API - smart assistants'
        }
      },
      footer: {
        company: 'Happy Choice Programming School',
        description: 'Programming school network for children. Developing talents, turning dreams into code.',
        rights: 'All rights reserved'
      }
    },
    kz: {
      nav: {
        cabinet: 'Жүйеге кіру'
      },
      hero: {
        title: 'Білім беру платформасы',
        subtitle: 'Happy Choice Programming School',
        description: 'Бағдарламалау мектептері желісінің ішкі білім беру экожүйесі. Ойындар жасаудан веб-қолданбалар әзірлеуге дейін - жас бағдарламашылардың саяхаты осы жерден басталады!',
        cta: 'Оқуды бастау',
        stats: {
          students: '2К+ оқушы',
          courses: '12+ курс',
          schools: '15+ филиал',
          projects: '3К+ жоба'
        }
      },
      features: {
        title: 'Жас бағдарламашыларға арналған курстар',
        subtitle: 'Ойындардан кәсіби дамуға дейін',
        games: {
          title: 'Ойындар жасау',
          desc: 'Roblox Studio, Scratch - геймдевтегі алғашқы қадамдар'
        },
        animation: {
          title: 'Анимация',
          desc: 'Scratch Jr, CoSpaces - кейіпкерлерді жандандыру'
        },
        web: {
          title: 'Веб-әзірлеу',
          desc: 'HTML, CSS, JavaScript - веб-сайттар жасау'
        },
        bots: {
          title: 'Чат-боттар',
          desc: 'Python, Telegram API - ақылды көмекшілер'
        }
      },
      footer: {
        company: 'Happy Choice Programming School',
        description: 'Балаларға арналған бағдарламалау мектептерінің желісі. Дарындылықты дамытамыз, арман-аңсарларды кодқа айналдырамыз.',
        rights: 'Барлық құқықтар қорғалған'
      }
    }
  };

  const t = translations[currentLang];

  const styles = {
    container: {
      fontFamily: "'Space Grotesk', 'Exo 2', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      margin: 0,
      padding: 0,
      lineHeight: 1.6,
      background: '#0a0a0a',
      color: '#ffffff',
      overflow: 'hidden'
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
      boxShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 80px #00d4ff',
      opacity: 0.7
    },

    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(20px)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
      transition: 'all 0.3s ease',
      width: '100%',
      boxSizing: 'border-box'
    },

    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box'
    },

    logo: {
      fontSize: '1.8rem',
      fontWeight: '800',
      fontFamily: "'Orbitron', 'Space Grotesk', monospace",
      background: 'linear-gradient(135deg, #00d4ff 0%, #ff6b6b 50%, #4ecdc4 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      textShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      letterSpacing: '0.05em'
    },

    navRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem'
    },

    langSwitcher: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'rgba(0, 212, 255, 0.1)',
      borderRadius: '25px',
      padding: '0.5rem',
      border: '1px solid rgba(0, 212, 255, 0.3)',
      backdropFilter: 'blur(10px)'
    },

    langButton: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      padding: '0.3rem 0.8rem',
      borderRadius: '15px',
      cursor: 'pointer',
      fontSize: '0.8rem',
      transition: 'all 0.3s ease',
      fontWeight: '600'
    },

    langButtonActive: {
      background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
      color: '#000',
      boxShadow: '0 4px 15px rgba(0, 212, 255, 0.4)'
    },

    cabinetButton: {
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      color: '#ffffff',
      border: 'none',
      padding: '0.8rem 2rem',
      borderRadius: '30px',
      fontSize: '0.9rem',
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)',
      position: 'relative',
      overflow: 'hidden'
    },

    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: `
        radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 60%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)
      `,
      overflow: 'hidden',
      paddingTop: '120px',
      width: '100%',
      boxSizing: 'border-box'
    },

    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      `,
      animation: 'float 20s ease-in-out infinite'
    },

    heroContent: {
      textAlign: 'center',
      maxWidth: '1200px',
      padding: '0 2rem',
      position: 'relative',
      zIndex: 2
    },

    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 6rem)',
      fontWeight: '700',
      fontFamily: "'Exo 2', 'Space Grotesk', sans-serif",
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ff6b6b 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: 1.1,
      letterSpacing: '-0.02em'
    },

    heroSubtitle: {
      fontSize: 'clamp(3rem, 12vw, 8rem)',
      fontWeight: '800',
      fontFamily: "'Orbitron', 'Exo 2', monospace",
      background: 'linear-gradient(135deg, #00d4ff 0%, #4ecdc4 50%, #ff6b6b 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '2rem',
      letterSpacing: '-0.01em',
      textShadow: '0 0 50px rgba(0, 212, 255, 0.5)'
    },

    heroDescription: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
      color: '#cccccc',
      marginBottom: '3rem',
      lineHeight: 1.6,
      maxWidth: '800px',
      margin: '0 auto 3rem'
    },

    codeDisplay: {
      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%)',
      border: '1px solid rgba(0, 212, 255, 0.3)',
      borderRadius: '20px',
      padding: '2rem',
      marginBottom: '3rem',
      fontFamily: "'Rajdhani', 'Fira Code', 'SF Mono', Monaco, monospace",
      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
      fontWeight: '500',
      color: '#00d4ff',
      maxWidth: '700px',
      margin: '0 auto 3rem',
      position: 'relative',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)'
    },

    codeHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid rgba(0, 212, 255, 0.2)'
    },

    codeDots: {
      display: 'flex',
      gap: '0.5rem'
    },

    codeDot: {
      width: '14px',
      height: '14px',
      borderRadius: '50%'
    },

    codeContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)'
    },

    ctaButton: {
      background: 'linear-gradient(135deg, #00d4ff 0%, #4ecdc4 100%)',
      color: '#000000',
      border: 'none',
      padding: '1.2rem 3rem',
      borderRadius: '50px',
      fontSize: '1.2rem',
      fontWeight: '700',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.8rem',
      transition: 'all 0.3s ease',
      marginBottom: '4rem',
      boxShadow: '0 10px 30px rgba(0, 212, 255, 0.4)',
      position: 'relative',
      overflow: 'hidden'
    },

    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      marginTop: '4rem'
    },

    statCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.3s ease'
    },

    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '800',
      fontFamily: "'Orbitron', 'Exo 2', monospace",
      background: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.5rem',
      letterSpacing: '0.02em'
    },

    statLabel: {
      color: '#cccccc',
      fontSize: '1rem',
      fontWeight: '500'
    },

    features: {
      padding: '8rem 2rem',
      background: 'linear-gradient(135deg, #111111 0%, #0a0a0a 100%)',
      position: 'relative'
    },

    featuresContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    },

    featuresTitle: {
      fontSize: 'clamp(2rem, 6vw, 4rem)',
      fontWeight: '700',
      fontFamily: "'Exo 2', 'Space Grotesk', sans-serif",
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.01em'
    },

    featuresSubtitle: {
      fontSize: '1.3rem',
      color: '#cccccc',
      marginBottom: '4rem',
      maxWidth: '600px',
      margin: '0 auto 4rem'
    },

    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      marginTop: '4rem'
    },

    featureCard: {
      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%)',
      borderRadius: '25px',
      padding: '3rem 2rem',
      border: '1px solid rgba(0, 212, 255, 0.2)',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },

    featureIcon: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)'
    },

    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      fontFamily: "'Space Grotesk', 'Exo 2', sans-serif",
      color: '#ffffff',
      marginBottom: '1rem',
      letterSpacing: '0.01em'
    },

    featureDescription: {
      color: '#cccccc',
      lineHeight: 1.6,
      fontSize: '1rem'
    },

    footer: {
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 100%)',
      padding: '6rem 2rem 3rem',
      borderTop: '1px solid rgba(0, 212, 255, 0.2)',
      position: 'relative'
    },

    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto'
    },

    footerTop: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '3rem',
      marginBottom: '4rem'
    },

    footerBrand: {
      textAlign: 'left'
    },

    footerBrandTitle: {
      fontSize: '2.5rem',
      fontWeight: '800',
      fontFamily: "'Orbitron', 'Space Grotesk', monospace",
      background: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      letterSpacing: '0.02em'
    },

    footerDescription: {
      color: '#cccccc',
      fontSize: '1.1rem',
      lineHeight: 1.6,
      marginBottom: '2rem',
      maxWidth: '400px'
    },

    footerSection: {
      textAlign: 'left'
    },

    footerSectionTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      fontFamily: "'Space Grotesk', 'Exo 2', sans-serif",
      color: '#ffffff',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      letterSpacing: '0.01em'
    },

    footerLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },

    footerLink: {
      color: '#cccccc',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 0'
    },

    footerContact: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },

    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      color: '#cccccc',
      fontSize: '1rem',
      padding: '0.5rem 0'
    },

    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem'
    },

    socialLink: {
      width: '50px',
      height: '50px',
      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(78, 205, 196, 0.2))',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#00d4ff',
      fontSize: '1.2rem',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(0, 212, 255, 0.3)',
      backdropFilter: 'blur(10px)'
    },

    footerBottom: {
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
      color: '#999999',
      fontSize: '0.9rem'
    }
  };

  const features = [
    {
      icon: <Zap size={40} color="#000" />,
      title: t.features.games.title,
      description: t.features.games.desc
    },
    {
      icon: <Star size={40} color="#000" />,
      title: t.features.animation.title,
      description: t.features.animation.desc
    },
    {
      icon: <Code size={40} color="#000" />,
      title: t.features.web.title,
      description: t.features.web.desc
    },
    {
      icon: <Brain size={40} color="#000" />,
      title: t.features.bots.title,
      description: t.features.bots.desc
    }
  ];

  return (
    <div style={styles.container}>
      {/* Custom Cursor */}
      <div style={styles.cursor}></div>
      
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.nav}>
        <div style={styles.logo}>
            <Terminal size={28} />
            <img style={{width:90}} src={AthenaLogo} alt="" />
          </div>
          
          <div style={styles.navRight}>
             
            <div style={styles.langSwitcher}>
              <Globe size={16} />
              {['ru', 'en', 'kz'].map(lang => (
                <button
                  key={lang}
                  style={{
                    ...styles.langButton,
                    ...(currentLang === lang ? styles.langButtonActive : {})
                  }}
                  onClick={() => setCurrentLang(lang)}
                >
                  {lang === 'en' ? 'EN' : lang.toUpperCase()}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setCurrentPage("loginPage")} 
              style={styles.cabinetButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 15px 35px rgba(255, 107, 107, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
              }}
            >
              <Rocket size={18} />
              {t.nav.cabinet}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} style={styles.hero}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            {t.hero.title}
          </h1>
          <h2 style={styles.heroSubtitle}>
            {t.hero.subtitle}
          </h2>
          <p style={styles.heroDescription}>
            {t.hero.description}
          </p>
          
          <div style={styles.codeDisplay}>
            <div style={styles.codeHeader}>
              <div style={styles.codeDots}>
                <div style={{...styles.codeDot, background: '#ff6b6b'}}></div>
                <div style={{...styles.codeDot, background: '#4ecdc4'}}></div>
                <div style={{...styles.codeDot, background: '#00d4ff'}}></div>
              </div>
              <Terminal size={20} />
              <span style={{color: '#cccccc'}}>athena-ai-terminal</span>
            </div>
            <div style={styles.codeContent}>
              <span style={{color: '#ff6b6b'}}>$</span>
              <span>{codeText}</span>
              <span style={{animation: 'blink 1s infinite', color: '#00d4ff'}}>█</span>
            </div>
          </div>
          
          <button 
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.05)';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.4)';
            }}
          >
            <Play size={24} />
            {t.hero.cta}
            <ArrowRight size={24} />
          </button>

          {/* Interactive Mission Section */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(78, 205, 196, 0.05) 100%)',
            borderRadius: '30px',
            padding: '4rem 2rem',
            marginTop: '4rem',
            border: '1px solid rgba(0, 212, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Animated background elements */}
            <div style={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(45deg, #00d4ff, #4ecdc4)',
              borderRadius: '50%',
              opacity: 0.1,
              animation: 'float 6s ease-in-out infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '15%',
              left: '8%',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              borderRadius: '50%',
              opacity: 0.1,
              animation: 'float 8s ease-in-out infinite reverse'
            }}></div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}>
              {/* Mission Text */}
              <div>
                <h3 style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '700',
                  fontFamily: "'Exo 2', sans-serif",
                  background: 'linear-gradient(135deg, #00d4ff 0%, #4ecdc4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '2rem',
                  letterSpacing: '-0.01em'
                }}>
                  Наша миссия
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#cccccc',
                  lineHeight: 1.6,
                  marginBottom: '2rem'
                }}>
                  Мы превращаем детские мечты в цифровую реальность через игровое программирование.
                  Каждый ребенок может стать создателем своего виртуального мира.
                </p>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    background: 'rgba(0, 212, 255, 0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    fontSize: '0.9rem',
                    color: '#00d4ff',
                    fontWeight: '600'
                  }}>
                    🎮 Геймификация
                  </div>
                  <div style={{
                    background: 'rgba(78, 205, 196, 0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(78, 205, 196, 0.3)',
                    fontSize: '0.9rem',
                    color: '#4ecdc4',
                    fontWeight: '600'
                  }}>
                    🧠 Креативность
                  </div>
                  <div style={{
                    background: 'rgba(255, 107, 107, 0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 107, 107, 0.3)',
                    fontSize: '0.9rem',
                    color: '#ff6b6b',
                    fontWeight: '600'
                  }}>
                    🤝 Командная работа
                  </div>
                </div>
              </div>

              {/* Interactive Image Placeholder */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%)',
                borderRadius: '20px',
                padding: '3rem',
                textAlign: 'center',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{
                  fontSize: '5rem',
                  marginBottom: '1rem',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  🚀
                </div>
                <p style={{
                  color: '#cccccc',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  Дети создают игры в Roblox Studio
                </p>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '2rem',
                  opacity: 0.3,
                  animation: 'float 4s ease-in-out infinite'
                }}>
                  💻
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  fontSize: '1.5rem',
                  opacity: 0.3,
                  animation: 'float 5s ease-in-out infinite reverse'
                }}>
                  🎨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Goals Section */}
      <section style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #111111 0%, #0a0a0a 100%)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '700',
              fontFamily: "'Exo 2', sans-serif",
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #4ecdc4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              Как мы учим программированию
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#cccccc',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Инновационные методики, проверенные практикой и любовью детей к технологиям
            </p>
          </div>

          {/* Three Column Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            marginBottom: '5rem'
          }}>
            {/* Tasks Column */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 107, 107, 0.05) 100%)',
              borderRadius: '25px',
              padding: '3rem 2rem',
              border: '1px solid rgba(255, 107, 107, 0.2)',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                borderRadius: '50%',
                opacity: 0.1
              }}></div>
              
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                fontSize: '2rem'
              }}>
                🎯
              </div>
              
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '1.5rem',
                fontFamily: "'Space Grotesk', sans-serif"
              }}>
                Наши задачи
              </h3>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  'Развитие логического мышления через игры',
                  'Формирование навыков решения проблем',
                  'Обучение основам алгоритмизации',
                  'Воспитание цифровой грамотности',
                  'Подготовка к IT-профессиям будущего'
                ].map((task, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1rem',
                    color: '#cccccc',
                    fontSize: '1rem',
                    lineHeight: 1.5
                  }}>
                    <span style={{
                      color: '#ff6b6b',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginTop: '0.1rem'
                    }}>
                      →
                    </span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            {/* Methods Column */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%)',
              borderRadius: '25px',
              padding: '3rem 2rem',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
                borderRadius: '50%',
                opacity: 0.1
              }}></div>
              
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                fontSize: '2rem'
              }}>
                🧪
              </div>
              
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '1.5rem',
                fontFamily: "'Space Grotesk', sans-serif"
              }}>
                Наши методики
              </h3>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  'Проектное обучение через создание игр',
                  'Peer-to-peer обучение в командах',
                  'Геймификация образовательного процесса',
                  'Персонализированные образовательные траектории',
                  'Практико-ориентированные мини-проекты'
                ].map((method, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1rem',
                    color: '#cccccc',
                    fontSize: '1rem',
                    lineHeight: 1.5
                  }}>
                    <span style={{
                      color: '#00d4ff',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginTop: '0.1rem'
                    }}>
                      →
                    </span>
                    {method}
                  </li>
                ))}
              </ul>
            </div>

            {/* Goals Column */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(78, 205, 196, 0.05) 100%)',
              borderRadius: '25px',
              padding: '3rem 2rem',
              border: '1px solid rgba(78, 205, 196, 0.2)',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(45deg, #4ecdc4, #26a69a)',
                borderRadius: '50%',
                opacity: 0.1
              }}></div>
              
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #4ecdc4, #26a69a)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                fontSize: '2rem'
              }}>
                🏆
              </div>
              
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '1.5rem',
                fontFamily: "'Space Grotesk', sans-serif"
              }}>
                Наши цели
              </h3>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  'Воспитать поколение цифровых творцов',
                  'Сформировать критическое мышление',
                  'Развить навыки презентации проектов',
                  'Подготовить к поступлению в IT-вузы',
                  'Создать комьюнити юных программистов'
                ].map((goal, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1rem',
                    color: '#cccccc',
                    fontSize: '1rem',
                    lineHeight: 1.5
                  }}>
                    <span style={{
                      color: '#4ecdc4',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginTop: '0.1rem'
                    }}>
                      →
                    </span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learning Path Visualization */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
            borderRadius: '30px',
            padding: '4rem 2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '600',
              textAlign: 'center',
              color: '#ffffff',
              marginBottom: '3rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              Путь юного программиста
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}>
              {[
                { icon: '🎮', title: 'Игры в Scratch', level: 'Начинающий' },
                { icon: '🎨', title: 'Анимация', level: 'Базовый' },
                { icon: '🌐', title: 'Веб-сайты', level: 'Продвинутый' },
                { icon: '🤖', title: 'Чат-боты', level: 'Эксперт' }
              ].map((step, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    background: `linear-gradient(135deg, ${
                      index === 0 ? '#ff6b6b, #ee5a24' :
                      index === 1 ? '#00d4ff, #0099cc' :
                      index === 2 ? '#4ecdc4, #26a69a' :
                      '#9b59b6, #8e44ad'
                    })`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '2.5rem',
                    boxShadow: `0 10px 30px ${
                      index === 0 ? 'rgba(255, 107, 107, 0.3)' :
                      index === 1 ? 'rgba(0, 212, 255, 0.3)' :
                      index === 2 ? 'rgba(78, 205, 196, 0.3)' :
                      'rgba(155, 89, 182, 0.3)'
                    }`
                  }}>
                    {step.icon}
                  </div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>
                    {step.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#cccccc',
                    margin: 0
                  }}>
                    {step.level}
                  </p>
                  
                  {index < 3 && (
                    <div style={{
                      position: 'absolute',
                      top: '50px',
                      right: '-1rem',
                      color: '#4ecdc4',
                      fontSize: '1.5rem',
                      transform: 'rotate(-90deg)',
                      display: window.innerWidth > 768 ? 'block' : 'none'
                    }}>
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featuresContent}>
          <h2 style={styles.featuresTitle}>
            {t.features.title}
          </h2>
          <p style={styles.featuresSubtitle}>
            {t.features.subtitle}
          </p>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px) rotateY(5deg)';
                  e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) rotateY(0deg)';
                  e.target.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 style={styles.featureTitle}>
                  {feature.title}
                </h3>
                <p style={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Results Section */}
          <div style={{
            marginTop: '6rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(78, 205, 196, 0.05) 100%)',
            borderRadius: '30px',
            padding: '4rem 2rem',
            border: '1px solid rgba(0, 212, 255, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <h3 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '2rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              Наши достижения
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {[
                { number: '2000+', label: 'Выпускников', icon: '🎓' },
                { number: '15', label: 'Филиалов', icon: '🏫' },
                { number: '50+', label: 'Проектов в месяц', icon: '🚀' },
                { number: '95%', label: 'Довольных родителей', icon: '💝' }
              ].map((stat, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  padding: '2rem 1rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    fontFamily: "'Orbitron', monospace",
                    background: 'linear-gradient(135deg, #00d4ff, #4ecdc4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    color: '#cccccc',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerTop}>
            {/* Brand Section */}
            <div style={styles.footerBrand}>
              <div style={styles.footerBrandTitle}>
                <Terminal size={35} />
                Happy Choice
              </div>
              <p style={styles.footerDescription}>
                {t.footer.description}
              </p>
              <div style={styles.socialLinks}>
                <a href="#" style={styles.socialLink}>
                  <GitBranch size={20} />
                </a>
                <a href="#" style={styles.socialLink}>
                  <Terminal size={20} />
                </a>
                <a href="#" style={styles.socialLink}>
                  <Code size={20} />
                </a>
                <a href="#" style={styles.socialLink}>
                  <Database size={20} />
                </a>
              </div>
            </div>
            
            {/* Courses Section */}
            <div style={styles.footerSection}>
              <h3 style={styles.footerSectionTitle}>
                <Rocket size={20} />
                Наши курсы
              </h3>
              <div style={styles.footerLinks}>
                <a href="#" style={styles.footerLink}>
                  <Zap size={16} />
                  Roblox Studio
                </a>
                <a href="#" style={styles.footerLink}>
                  <Star size={16} />
                  Scratch Jr
                </a>
                <a href="#" style={styles.footerLink}>
                  <Code size={16} />
                  Веб-разработка
                </a>
                <a href="#" style={styles.footerLink}>
                  <Brain size={16} />
                  Python и боты
                </a>
              </div>
            </div>
            
            {/* Support Section */}
            <div style={styles.footerSection}>
              <h3 style={styles.footerSectionTitle}>
                <Users size={20} />
                Сообщество
              </h3>
              <div style={styles.footerLinks}>
                <a href="#" style={styles.footerLink}>
                  <BookOpen size={16} />
                  База знаний
                </a>
                <a href="#" style={styles.footerLink}>
                  <Award size={16} />
                  Достижения
                </a>
                <a href="#" style={styles.footerLink}>
                  <Users size={16} />
                  Форум учеников
                </a>
                <a href="#" style={styles.footerLink}>
                  <TrendingUp size={16} />
                  Прогресс
                </a>
              </div>
            </div>
            
            {/* Contact Section */}
            <div style={styles.footerSection}>
              <h3 style={styles.footerSectionTitle}>
                <Globe size={20} />
                Контакты
              </h3>
              <div style={styles.footerContact}>
                <div style={styles.contactItem}>
                  <Terminal size={16} />
                  <span>+7 (777) 123-45-67</span>
                </div>
                <div style={styles.contactItem}>
                  <Database size={16} />
                  <span>info@athena.kz</span>
                </div>
                <div style={styles.contactItem}>
                  <Code size={16} />
                  <span>г. Алматы, ул. Абая 150</span>
                </div>
                <div style={styles.contactItem}>
                  <Globe size={16} />
                  <span>happychoice.kz</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <p>&copy; 2025 {t.footer.company}. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          33% { 
            transform: translateY(-10px) rotate(1deg);
          }
          66% { 
            transform: translateY(-5px) rotate(-1deg);
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(0, 212, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.3);
          }
        }
        
        @keyframes matrix {
          0% { 
            background-position: 0% 0%;
          }
          100% { 
            background-position: 100% 100%;
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes rotate3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: rotateX(5deg) rotateY(5deg);
          }
          50% {
            transform: rotateX(0deg) rotateY(10deg);
          }
          75% {
            transform: rotateX(-5deg) rotateY(5deg);
          }
          100% {
            transform: rotateX(0deg) rotateY(0deg);
          }
        }
        
        @keyframes neon {
          0%, 100% {
            text-shadow: 
              0 0 5px #00d4ff,
              0 0 10px #00d4ff,
              0 0 20px #00d4ff,
              0 0 40px #00d4ff;
          }
          50% {
            text-shadow: 
              0 0 2px #00d4ff,
              0 0 5px #00d4ff,
              0 0 10px #00d4ff,
              0 0 20px #00d4ff,
              0 0 35px #00d4ff,
              0 0 40px #00d4ff;
          }
        }
        
        /* Particle effect */
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00d4ff;
          border-radius: 50%;
          animation: particle-float 8s infinite linear;
        }
        
        @keyframes particle-float {
          0% {
            transform: translateY(100vh) translateX(-50px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }
        
        /* Custom scrollbar */
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
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #4ecdc4, #00d4ff);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .container {
            overflow-x: hidden;
            width: 100%;
          }
          
          .header {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            z-index: 1000 !important;
            box-sizing: border-box !important;
            background: rgba(10, 10, 10, 0.98) !important;
          }
          
          .nav {
            padding: 0.8rem 1rem !important;
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: center !important;
            width: 100% !important;
            box-sizing: border-box !important;
            max-width: none !important;
          }
          
          .logo {
            font-size: 1.2rem !important;
            gap: 0.3rem !important;
            white-space: nowrap !important;
          }
          
          .nav-right {
            flex-direction: row !important;
            gap: 1rem !important;
            width: 100% !important;
            justify-content: center !important;
            align-items: center !important;
            flex-wrap: wrap !important;
          }
          
          .lang-switcher {
            padding: 0.3rem !important;
            gap: 0.2rem !important;
            flex-shrink: 0 !important;
          }
          
          .lang-button {
            padding: 0.25rem 0.5rem !important;
            font-size: 0.7rem !important;
            min-width: 26px !important;
          }
          
          .cabinet-button {
            padding: 0.6rem 1.2rem !important;
            font-size: 0.85rem !important;
            white-space: nowrap !important;
            flex-shrink: 0 !important;
          }
          
          .hero {
            padding: 8rem 1rem 4rem !important;
            min-height: calc(100vh - 140px) !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          
          .hero-content {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 0.5rem !important;
            box-sizing: border-box !important;
          }
          
          .hero-title {
            font-size: 1.6rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.8rem !important;
            word-wrap: break-word !important;
          }
          
          .hero-subtitle {
            font-size: 2rem !important;
            line-height: 1.1 !important;
            margin-bottom: 1.5rem !important;
            word-wrap: break-word !important;
          }
          
          .hero-description {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
            margin-bottom: 2rem !important;
            padding: 0 !important;
            word-wrap: break-word !important;
          }
          
          .code-display {
            padding: 1rem !important;
            font-size: 0.8rem !important;
            margin: 0 0 2rem !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          
          .code-header {
            margin-bottom: 0.8rem !important;
            flex-wrap: wrap !important;
            gap: 0.3rem !important;
          }
          
          .code-content {
            font-size: 0.75rem !important;
            flex-wrap: wrap !important;
            word-wrap: break-word !important;
          }
          
          .cta-button {
            padding: 0.8rem 1.5rem !important;
            font-size: 0.9rem !important;
            margin-bottom: 3rem !important;
            width: auto !important;
            max-width: 250px !important;
            justify-content: center !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
            margin-top: 2rem !important;
            width: 100% !important;
          }
          
          .stat-card {
            padding: 1.2rem 0.8rem !important;
          }
          
          .stat-number {
            font-size: 1.8rem !important;
            margin-bottom: 0.3rem !important;
          }
          
          .stat-label {
            font-size: 0.85rem !important;
          }
          
          .features {
            padding: 3rem 1rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          
          .features-content {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
          }
          
          .features-title {
            font-size: 2rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.8rem !important;
          }
          
          .features-subtitle {
            font-size: 1rem !important;
            margin-bottom: 2.5rem !important;
            padding: 0 !important;
          }
          
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin-top: 2rem !important;
            width: 100% !important;
          }
          
          .feature-card {
            padding: 2rem 1.5rem !important;
            margin: 0 !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          
          .feature-icon {
            width: 60px !important;
            height: 60px !important;
            margin-bottom: 1rem !important;
          }
          
          .feature-title {
            font-size: 1.2rem !important;
            margin-bottom: 0.8rem !important;
          }
          
          .feature-description {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }
          
          .footer {
            padding: 3rem 1rem 2rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          
          .footer-content {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          .footer-top {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            margin-bottom: 2.5rem !important;
          }
          
          .footer-brand {
            text-align: center !important;
          }
          
          .footer-brand-title {
            font-size: 1.8rem !important;
            justify-content: center !important;
            margin-bottom: 1rem !important;
          }
          
          .footer-description {
            text-align: center !important;
            max-width: 100% !important;
            margin-bottom: 1.5rem !important;
            font-size: 1rem !important;
          }
          
          .footer-section {
            text-align: center !important;
          }
          
          .footer-section-title {
            font-size: 1.1rem !important;
            justify-content: center !important;
            margin-bottom: 1rem !important;
          }
          
          .footer-links {
            align-items: center !important;
            gap: 0.6rem !important;
          }
          
          .footer-link {
            justify-content: center !important;
            padding: 0.3rem !important;
            font-size: 0.9rem !important;
          }
          
          .footer-contact {
            align-items: center !important;
            gap: 0.6rem !important;
          }
          
          .contact-item {
            justify-content: center !important;
            font-size: 0.9rem !important;
            padding: 0.3rem !important;
          }
          
          .social-links {
            justify-content: center !important;
            gap: 0.8rem !important;
            margin-top: 1.5rem !important;
          }
          
          .social-link {
            width: 40px !important;
            height: 40px !important;
            font-size: 1rem !important;
          }
          
          .footer-bottom {
            text-align: center !important;
            font-size: 0.8rem !important;
            padding-top: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.8rem !important;
          }
          
          .hero-description {
            font-size: 0.9rem !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .stat-card {
            padding: 1.2rem 0.8rem !important;
          }
          
          .feature-card {
            padding: 1.5rem 1rem !important;
            margin: 0 0.2rem !important;
          }
          
          .features-title {
            font-size: 1.8rem !important;
          }
          
          .features-subtitle {
            font-size: 1rem !important;
          }
          
          .code-display {
            margin: 0 0.2rem 2rem !important;
            padding: 1rem !important;
          }
          
          .cta-button {
            padding: 0.9rem 1.5rem !important;
            font-size: 0.95rem !important;
          }
          
          .footer-brand-title {
            font-size: 1.7rem !important;
          }
          
          .footer-section-title {
            font-size: 1.1rem !important;
          }
          
          .nav {
            padding: 0.8rem !important;
          }
          
          .logo {
            font-size: 1.1rem !important;
          }
          
          .cabinet-button {
            padding: 0.7rem 1.5rem !important;
            font-size: 0.85rem !important;
          }
        }
        
        @media (max-width: 360px) {
          .hero {
            padding: 5rem 0.5rem 3rem !important;
          }
          
          .hero-title {
            font-size: 1.3rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.6rem !important;
          }
          
          .features {
            padding: 3rem 0.5rem !important;
          }
          
          .footer {
            padding: 3rem 0.5rem 2rem !important;
          }
          
          .feature-card {
            margin: 0 !important;
          }
          
          .code-display {
            margin: 0 0 2rem !important;
          }
        }
        
        /* Enhanced hover effects */
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .cabinet-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .cabinet-button:hover::before {
          left: 100%;
        }
        
        /* Logo glow effect */
        .logo:hover {
          animation: neon 2s ease-in-out infinite alternate;
        }
        
        /* Feature cards 3D effect */
        .feature-card {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .feature-card:hover {
          animation: rotate3d 4s ease-in-out infinite;
        }
        
        /* Stat cards pulse effect */
        .stat-card:hover {
          animation: pulse 2s ease-in-out infinite;
        }
        
        /* Code display matrix effect */
        .code-display::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(90deg, transparent 0%, rgba(0, 212, 255, 0.03) 50%, transparent 100%),
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.05) 2px, rgba(0, 212, 255, 0.05) 4px);
          animation: matrix 3s linear infinite;
          pointer-events: none;
        }
        
        /* Background particles */
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 25% 25%, #00d4ff, transparent),
            radial-gradient(1px 1px at 75% 75%, #4ecdc4, transparent),
            radial-gradient(1px 1px at 50% 50%, #ff6b6b, transparent);
          background-size: 100px 100px, 80px 80px, 120px 120px;
          animation: float 20s ease-in-out infinite;
          opacity: 0.1;
          pointer-events: none;
          z-index: -1;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Selection color */
        ::selection {
          background: rgba(0, 212, 255, 0.3);
          color: #ffffff;
        }
        
        /* Focus styles */
        button:focus,
        input:focus {
          outline: 2px solid #00d4ff;
          outline-offset: 2px;
        }
        
        /* Loading animation */
        @keyframes loading {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        /* Glassmorphism effect */
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Text gradient animation */
        .gradient-text {
          background: linear-gradient(-45deg, #00d4ff, #4ecdc4, #ff6b6b, #feca57);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default UltraModernAthenaHomepage;