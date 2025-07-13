// src/components/dashboard/StudySection.jsx

import React from 'react';
import { BookOpen, Users } from 'lucide-react';
import CourseDetail from './cources/coursedetail';

const StudySection = ({ 
  selectedCourse, 
  onCourseSelect, 
  onBackToCourses, 
  isMobile, 
  translations, 
  language, 
  isHovered, 
  onHover 
}) => {
  const t = translations[language];

  const coursesData = [
    {
      title: "Roblox Studio",
      description: "Создавай игры – от основ до публикации!",
      technologies: ["Кодинг", "3D", "Моделирование", "Дизайн", "LUA"],
      age: "+10",
      bgImg: "../../imgs/roblox-card-img.jpg"
    },
    {
      title: "Scratch Junior",
      description: "Создай свой мультфильм! Простые алгоритмы для самых маленьких.",
      technologies: ["Блочные алгоритмы", "Для малышей"],
      age: "+5",
      bgImg: "../../imgs/scratch-jr.jpg"
    },
    {
      title: "Minecraft: Education Edition",
      description: "Освой программирование, математику и науку, создавая миры. Развивай креативность и логику в увлекательных образовательных миссиях!",
      technologies: ["Блочные алгоритмы", "Математика"],
      age: "+8",
      bgImg: "../../imgs/minecraft-ee.jpg"
    },
    {
      title: "Scratch",
      description: "От анимации до игр — собери свой проект из блоков!",
      technologies: ["Блочные алгоритмы", "Анимации"],
      age: "+6",
      bgImg: "../../imgs/scratch-img.png"
    },
    {
      title: "CoSpaces",
      description: "Твой цифровой песочник: от анимации до симуляторов!",
      technologies: ["VR/AR", "Геймдизайн", "3D-моделирование"],
      age: "+6",
      bgImg: "../../imgs/cospaces.jpg"
    },
  ];

  const styles = {
    studySection: {
      background: "white",
      borderRadius: "24px",
      padding: isMobile ? "24px" : "40px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      border: "1px solid rgba(255,255,255,0.1)",
    },

    studyTitle: {
      fontSize: isMobile ? "24px" : "28px",
      fontWeight: "700",
      color: "#1a1a1a",
      marginBottom: "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
    },

    coursesContainer: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "24px",
      justifyItems: "center",
      width: "100%",
    },

    courseCard: {
      width: "100%",
      maxWidth: "400px",
      background: "#ffffff",
      borderRadius: "24px",
      overflow: "hidden",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      cursor: "pointer",
      border: "1px solid rgba(255,255,255,0.1)",
    },

    courseCardHovered: {
      boxShadow: "0 24px 48px rgba(0,0,0,0.12)",
      transform: "translateY(-8px)",
    },

    courseCardNormal: {
      boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
      transform: "translateY(0)",
    },

    courseImage: {
      height: "180px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },

    courseContent: {
      padding: "32px",
    },

    courseTitle: {
      color: "black",
      fontSize: "16px",
      lineHeight: "1.6",
      margin: "0 0 5px 0",
      fontWeight: "700",
      textAlign: "center",
      fontFamily: "Times New Roman"
    },

    courseDescription: {
      color: "#64748b",
      fontSize: "14px",
      lineHeight: "1.6",
      margin: "0 0 15px 0",
      fontWeight: "500",
      textAlign: "center",
    },

    techTags: {
      display: "flex",
      gap: "8px",
      marginBottom: "24px",
      flexWrap: "wrap",
      justifyContent: "center",
    },

    techTag: {
      background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
      color: "#475569",
      padding: "6px 12px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "600",
      border: "1px solid #e2e8f0",
    },

    courseStats: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "24px",
    },

    courseStat: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      color: "#64748b",
      fontSize: "13px",
      fontWeight: "500",
    },

    courseBottom: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "16px"
    },

    courseButton: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#ffffff",
      border: "none",
      borderRadius: "12px",
      padding: "12px 20px",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "transform 0.2s ease",
      boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
    },
  };

  // Если выбран курс, показываем детали курса
  if (selectedCourse) {
    return (
      <CourseDetail 
        course={selectedCourse} 
        onBack={onBackToCourses}
        language={language}
      />
    );
  }

  // Иначе показываем список курсов
  return (
    <div style={styles.studySection}>
      <h2 style={styles.studyTitle}>
        <BookOpen size={28} color="#667eea" />
        Методические материалы
      </h2>

      <div style={styles.coursesContainer}>
        {coursesData.map((course, index) => (
          <div
            key={index}
            style={{
              ...styles.courseCard,
              ...(isHovered === index
                ? styles.courseCardHovered
                : styles.courseCardNormal),
            }}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onCourseSelect(course)}
          >
            <div
              style={{
                ...styles.courseImage,
                backgroundImage: `linear-gradient(rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)), url(${course.bgImg})`,
              }}
            />

            <div style={styles.courseContent}>
              <p style={styles.courseTitle}>{course.title}</p>
              <p style={styles.courseDescription}>{course.description}</p>

              <div style={styles.techTags}>
                {course.technologies.map((tech, techIndex) => (
                  <span key={techIndex} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={styles.courseStats}>
                <div style={styles.courseStat}>
                  <Users size={16} />
                  <span>От: {course.age} лет</span>
                </div>
              </div>

              <div style={styles.courseBottom}>
                <button
                  style={styles.courseButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    onCourseSelect(course);
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                  }}
                >
                  {t.openCourse}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudySection;