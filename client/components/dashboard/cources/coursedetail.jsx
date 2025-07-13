// Этот файл нужно создать по пути: src/components/courses/CourseDetail.jsx

import React, { useState } from 'react';
import { ArrowLeft, Play, FileText, Download, BookOpen, Video, Users, Clock } from 'lucide-react';

const CourseDetail = ({ course, onBack, language = 'ru' }) => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Переводы
  const translations = {
    ru: {
      backToCourses: 'Назад к курсам',
      methodicalMaterials: 'Методические материалы',
      lessons: 'Уроки',
      materials: 'Материалы',
      videos: 'Видео материалы',
      duration: 'Длительность',
      ageGroup: 'Возрастная группа',
      description: 'Описание курса',
      teachingGoals: 'Цели обучения',
      teachingMethods: 'Методики преподавания',
      openLesson: 'Открыть урок',
      downloadMaterial: 'Скачать',
      watchVideo: 'Смотреть',
      minutes: 'мин',
      hours: 'ч'
    },
    en: {
      backToCourses: 'Back to Courses',
      methodicalMaterials: 'Methodical Materials',
      lessons: 'Lessons',
      materials: 'Materials',
      videos: 'Video Materials',
      duration: 'Duration',
      ageGroup: 'Age Group',
      description: 'Course Description',
      teachingGoals: 'Teaching Goals',
      teachingMethods: 'Teaching Methods',
      openLesson: 'Open Lesson',
      downloadMaterial: 'Download',
      watchVideo: 'Watch',
      minutes: 'min',
      hours: 'h'
    },
    kz: {
      backToCourses: 'Курстарға қайту',
      methodicalMaterials: 'Әдістемелік материалдар',
      lessons: 'Сабақтар',
      materials: 'Материалдар',
      videos: 'Бейне материалдар',
      duration: 'Ұзақтығы',
      ageGroup: 'Жас тобы',
      description: 'Курс сипаттамасы',
      teachingGoals: 'Оқыту мақсаттары',
      teachingMethods: 'Оқыту әдістемесі',
      openLesson: 'Сабақты ашу',
      downloadMaterial: 'Жүктеу',
      watchVideo: 'Көру',
      minutes: 'мин',
      hours: 'сағ'
    }
  };

  const t = translations[language] || translations.ru;

  // Методические материалы для учителей
  const getTeacherMaterials = () => {
    if (course && course.title === "Roblox Studio") {
      return {
        lessons: [
          { id: 1, title: "Урок 1 - Введение в Roblox Studio", duration: 45, description: "План урока, цели, материалы для введения в Roblox Studio" },
          { id: 2, title: "Урок 2 - Создание первого мира", duration: 60, description: "Пошаговое руководство по созданию базового игрового мира" },
          { id: 3, title: "Урок 3 - Основы программирования Lua", duration: 75, description: "Методика обучения основам скриптинга в Roblox" },
          { id: 4, title: "Урок 4 - Создание игровых объектов", duration: 90, description: "Практические задания по созданию интерактивных объектов" },
          { id: 5, title: "Урок 5 - Система очков и достижений", duration: 80, description: "Разработка игровой механики для мотивации учеников" },
          { id: 6, title: "Урок 6 - Публикация игры", duration: 60, description: "Финальный этап - публикация и презентация проектов" }
        ],
        materials: [
          { name: "Рабочая программа курса.pdf", type: "pdf", size: "2.5 МБ" },
          { name: "Презентации всех уроков.zip", type: "zip", size: "45 МБ" },
          { name: "Шаблоны проектов.rblx", type: "rblx", size: "12 МБ" },
          { name: "Методические рекомендации.docx", type: "docx", size: "1.8 МБ" },
          { name: "Критерии оценивания.pdf", type: "pdf", size: "890 КБ" }
        ],
        videos: [
          { title: "Демонстрация урока 1", duration: "15:30", description: "Видео-пример проведения первого урока" },
          { title: "Работа с инструментами Roblox", duration: "22:45", description: "Подробный обзор интерфейса для преподавателей" },
          { title: "Типичные ошибки учеников", duration: "18:20", description: "Разбор частых проблем и способов их решения" },
          { title: "Мотивация на уроках программирования", duration: "12:15", description: "Методы вовлечения детей в процесс обучения" }
        ]
      };
    }

    if (course && course.title === "Scratch Junior") {
      return {
        lessons: [
          { id: 1, title: "Урок 1 - Знакомство со Scratch Jr", duration: 30, description: "Адаптация интерфейса для самых маленьких" },
          { id: 2, title: "Урок 2 - Мой первый персонаж", duration: 25, description: "Создание и анимация первого спрайта" },
          { id: 3, title: "Урок 3 - Движение и анимация", duration: 35, description: "Основы блочного программирования для дошкольников" },
          { id: 4, title: "Урок 4 - Звуки и музыка", duration: 30, description: "Добавление аудиоэффектов в проекты" },
          { id: 5, title: "Урок 5 - Создание мультфильма", duration: 40, description: "Финальный проект - собственный мультфильм" }
        ],
        materials: [
          { name: "Программа для дошкольников.pdf", type: "pdf", size: "1.2 МБ" },
          { name: "Карточки с заданиями.pdf", type: "pdf", size: "8.5 МБ" },
          { name: "Примеры проектов.zip", type: "zip", size: "15 МБ" },
          { name: "Игры для разминки.docx", type: "docx", size: "2.1 МБ" }
        ],
        videos: [
          { title: "Работа с дошкольниками", duration: "25:10", description: "Особенности преподавания для малышей" },
          { title: "Демо урок Scratch Jr", duration: "20:30", description: "Полная запись урока с детьми 5-6 лет" },
          { title: "Родительское собрание", duration: "12:45", description: "Презентация курса для родителей" }
        ]
      };
    }

    // Базовый шаблон для других курсов
    return {
      lessons: [
        { id: 1, title: "Урок 1 - Введение", duration: 45, description: "Вводный урок и знакомство с платформой" },
        { id: 2, title: "Урок 2 - Основы", duration: 60, description: "Изучение основных концепций и инструментов" },
        { id: 3, title: "Урок 3 - Практика", duration: 75, description: "Практические задания и упражнения" },
        { id: 4, title: "Урок 4 - Проект", duration: 90, description: "Работа над итоговым проектом" }
      ],
      materials: [
        { name: "Рабочая программа.pdf", type: "pdf", size: "2 МБ" },
        { name: "Презентации уроков.zip", type: "zip", size: "25 МБ" },
        { name: "Методические указания.docx", type: "docx", size: "1.5 МБ" }
      ],
      videos: [
        { title: "Обзор курса", duration: "15:00", description: "Общий обзор программы курса" },
        { title: "Демо урок", duration: "30:00", description: "Пример проведения урока" }
      ]
    };
  };

  const materials = getTeacherMaterials();
  const totalDuration = materials.lessons.reduce((sum, lesson) => sum + lesson.duration, 0);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
    console.log('Открываем методический материал урока:', lesson.title);
  };

  const handleMaterialDownload = (material) => {
    console.log('Скачиваем материал:', material.name);
    // Здесь будет логика скачивания
  };

  const handleVideoPlay = (video) => {
    console.log('Воспроизводим видео:', video.title);
    // Здесь будет логика воспроизведения видео
  };

  // Проверяем, что course существует
  if (!course) {
    return (
      <div style={{ 
        background: 'white', 
        borderRadius: '24px', 
        padding: '40px', 
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
      }}>
        <p>Курс не найден</p>
        <button 
          onClick={onBack}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            cursor: 'pointer'
          }}
        >
          {t.backToCourses}
        </button>
      </div>
    );
  }

  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      padding: window.innerWidth <= 768 ? '20px' : '32px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      border: '1px solid rgba(255,255,255,0.1)',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Кнопка назад */}
      <button 
        onClick={onBack}
        style={{
          background: 'transparent',
          border: '2px solid #e2e8f0',
          borderRadius: '12px',
          padding: '10px 16px',
          color: '#64748b',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          marginBottom: '24px'
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = '#667eea';
          e.target.style.color = '#667eea';
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = '#e2e8f0';
          e.target.style.color = '#64748b';
        }}
      >
        <ArrowLeft size={16} />
        {t.backToCourses}
      </button>

      {/* Заголовок */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '2fr 1fr',
        gap: '32px',
        marginBottom: '32px'
      }}>
        <div>
          <h1 style={{
            fontSize: window.innerWidth <= 768 ? '24px' : '32px',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 8px 0'
          }}>
            {course.title}
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#667eea',
            fontWeight: '600',
            margin: '0 0 24px 0'
          }}>
            {t.methodicalMaterials}
          </p>
          
          {/* Статистика для преподавателей */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', margin: '0 0 4px 0' }}>
                {materials.lessons.length}
              </p>
              <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>Уроков</p>
            </div>
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', margin: '0 0 4px 0' }}>
                {Math.floor(totalDuration / 60)}{t.hours} {totalDuration % 60}{t.minutes}
              </p>
              <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>{t.duration}</p>
            </div>
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', margin: '0 0 4px 0' }}>
                {course.age}
              </p>
              <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>{t.ageGroup}</p>
            </div>
          </div>

          {/* Теги технологий */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {course.technologies && course.technologies.map((tech, index) => (
              <span key={index} style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Изображение курса */}
        <div style={{
          width: '100%',
          height: '200px',
          borderRadius: '16px',
          backgroundImage: `url(${course.bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
        }} />
      </div>

      {/* Описание курса */}
      <div style={{
        background: '#fafbfc',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid #e2e8f0',
        marginBottom: '32px'
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '700',
          color: '#1e293b',
          margin: '0 0 16px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <BookOpen size={20} />
          {t.description}
        </h2>
        <div style={{ color: '#475569', lineHeight: '1.6', fontSize: '14px' }}>
          <p>{course.description}</p>
          <p><strong>{t.teachingGoals}:</strong> Развитие логического мышления, творческих способностей и навыков программирования у детей.</p>
          <p><strong>{t.teachingMethods}:</strong> Игровой подход, проектная деятельность, индивидуальная и групповая работа.</p>
        </div>
      </div>

      {/* Контент в три колонки */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
        gap: '24px'
      }}>
        {/* Список уроков */}
        <div style={{
          background: '#fafbfc',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 16px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <BookOpen size={20} />
            {t.lessons}
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {materials.lessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => handleLessonClick(lesson)}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1e293b',
                  margin: '0 0 8px 0'
                }}>
                  {lesson.title}
                </h3>
                <p style={{
                  fontSize: '12px',
                  color: '#64748b',
                  margin: '0 0 8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Clock size={12} />
                  {lesson.duration} {t.minutes}
                </p>
                <p style={{
                  fontSize: '12px',
                  color: '#475569',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  {lesson.description}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLessonClick(lesson);
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    fontSize: '11px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <BookOpen size={12} />
                  {t.openLesson}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Материалы для скачивания */}
        <div style={{
          background: '#fafbfc',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 16px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <FileText size={20} />
            {t.materials}
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {materials.materials.map((material, index) => (
              <div
                key={index}
                onClick={() => handleMaterialDownload(material)}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '12px',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <Download size={16} style={{ color: '#667eea' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#1e293b',
                      margin: '0 0 2px 0'
                    }}>
                      {material.name}
                    </p>
                    <p style={{
                      fontSize: '11px',
                      color: '#64748b',
                      margin: 0
                    }}>
                      {material.size}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMaterialDownload(material);
                    }}
                    style={{
                      background: '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      fontSize: '10px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    {t.downloadMaterial}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Видео материалы */}
        <div style={{
          background: '#fafbfc',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 16px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Video size={20} />
            {t.videos}
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {materials.videos.map((video, index) => (
              <div
                key={index}
                onClick={() => handleVideoPlay(video)}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '12px',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '30px',
                    background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Play size={16} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#1e293b',
                      margin: '0 0 4px 0'
                    }}>
                      {video.title}
                    </h3>
                    <p style={{
                      fontSize: '11px',
                      color: '#64748b',
                      margin: '0 0 4px 0'
                    }}>
                      {video.duration}
                    </p>
                    <p style={{
                      fontSize: '11px',
                      color: '#475569',
                      margin: 0,
                      lineHeight: '1.3'
                    }}>
                      {video.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoPlay(video);
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 8px',
                    fontSize: '10px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Play size={10} />
                  {t.watchVideo}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;