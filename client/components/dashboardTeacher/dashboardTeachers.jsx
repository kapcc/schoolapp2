// src/components/dashboardTeacher/dashboardTeachers.jsx

import React, { useState, useEffect, useCallback, useMemo } from "react";
import authService from "../../src/authservice";

// Импортируем компоненты
import DashboardHeader from "../dashboard/DashboardHeader";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import ProfileSection from "../dashboard/ProfileSection";
import StudySection from "../dashboard/StudySection";
import ChatSection from "../dashboard/ChatSection";
import NotificationBanner from "../dashboard/NotificationBanner";
import HappyShop from "../dashboard/HappyShop"
import MyProgressComponent from "../dashboard/ProgressSection";
import EducationalGamesComponent from "../dashboard/quiz";
const PersonalCabinet = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState("profile");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [language, setLanguage] = useState("ru");
  const [isMobile, setIsMobile] = useState(false);
  const [dataTabla, setDataTable] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notiShow, setNotiShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Переводы
  const translations = {
    ru: {
      personalCabinet: "Личный кабинет",
      myProfile: "МОЙ ПРОФИЛЬ",
      study: "УЧЕБА",
      chat: "ЧАТ",
      chatTitle: "Общий чат",
      personalInfo: "Личная информация",
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Email",
      phone: "Телефон",
      birthDate: "Дата рождения",
      city: "Город",
      workplace: "Учреждение",
      position: "Должность",
      logout: "Выйти",
      saveChanges: "Сохранить изменения",
      openCourse: "Открыть курс",
      profileUpdated: "Профиль успешно обновлён!",
      progress: "МОЙ ПРОГРЕСС",
      shop: "HAPPY SHOP"
    },
    en: {
      personalCabinet: "Personal Cabinet",
      myProfile: "MY PROFILE",
      study: "STUDY",
      chat: "CHAT",
      chatTitle: "General Chat",
      personalInfo: "Personal Information",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      birthDate: "Birth Date",
      city: "City",
      workplace: "Educational institution",
      position: "Position",
      logout: "Logout",
      saveChanges: "Save Changes",
      openCourse: "Open Course",
      profileUpdated: "Profile successfully updated!",
      progress: "MY PROGRESS",
      shop: "HAPPY SHOP"
    },
    kz: {
      personalCabinet: "Жеке кабинет",
      myProfile: "МЕНІҢ ПРОФИЛІМ",
      study: "ОҚЫТУ",
      chat: "ЧАТ",
      chatTitle: "Жалпы чат",
      personalInfo: "Жеке ақпарат",
      firstName: "Аты",
      lastName: "Тегі",
      email: "Email",
      phone: "Телефон",
      birthDate: "Туған күні",
      city: "Қала",
      workplace: "Мекеме",
      position: "Лауазым",
      logout: "Шығу",
      saveChanges: "Өзгерістерді сақтау",
      openCourse: "Курсты ашу",
      profileUpdated: "Профиль сәтті жаңартылды!",
      progress:"МЕНІҢ ҮЛГЕРІМІМ",
      shop: "HAPPY SHOP"
    },
  };

  const t = useMemo(() => translations[language], [language]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await authService.getProfile();
        setDataTable(data);
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleUserFieldChange = useCallback((fieldPath, value) => {
    setDataTable((prevData) => {
      if (!prevData) return prevData;

      const newData = { ...prevData };

      if (fieldPath.startsWith("user.")) {
        const userField = fieldPath.split(".")[1];
        newData.user = {
          ...newData.user,
          [userField]: value,
        };
      } else {
        newData[fieldPath] = value;
      }

      return newData;
    });
  }, []);

  const handleMenuClick = (section) => {
    setActiveSection(section);
    // Сбрасываем выбранный курс при переключении секций
    if (section !== 'study') {
      setSelectedCourse(null);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleSaveProfile = async () => {
    await authService.savePostGresTeacher(dataTabla, setNotiShow);
    // Автоматически скрываем уведомление через 3 секунды
    setTimeout(() => setNotiShow(false), 3000);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  const handleHover = (index) => {
    setIsHovered(index);
  };

  const handleCloseNotification = () => {
    setNotiShow(false);
  };

  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    },

    mainWrapper: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      flex: 1,
      marginTop: "72px", // отступ для фиксированного хедера
    },

    mainContent: {
      flex: 1,
      padding: isMobile ? "20px" : "40px",
      overflow: "auto",
    },
  };

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <ProfileSection
            dataTabla={dataTabla}
            isLoading={isLoading}
            isMobile={isMobile}
            translations={translations}
            language={language}
            onFieldChange={handleUserFieldChange}
            onSave={handleSaveProfile}
          />
        );
      case "study":
        return (
          <StudySection
            selectedCourse={selectedCourse}
            onCourseSelect={handleCourseSelect}
            onBackToCourses={handleBackToCourses}
            isMobile={isMobile}
            translations={translations}
            language={language}
            isHovered={isHovered}
            onHover={handleHover}
          />
        );
      case "chat":
        return (
          <ChatSection
            user={user}
            dataTabla={dataTabla}
            isMobile={isMobile}
            translations={translations}
            language={language}
          />
        );
        case "shop":
        return (
          <HappyShop
            user={user}
            dataTabla={dataTabla}
            isMobile={isMobile}
            translations={translations}
            language={language}
          />
        );
        case "progress":
        return (
          <MyProgressComponent
            user={user}
            dataTabla={dataTabla}
            isMobile={isMobile}
            translations={translations}
            language={language}
          />
        );
        case "quiz":
        return (
          <EducationalGamesComponent
            user={user}
            dataTabla={dataTabla}
            isMobile={isMobile}
            translations={translations}
            language={language}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* Верхний фиксированный хедер */}
      <DashboardHeader
        language={language}
        onLanguageChange={handleLanguageChange}
        onLogout={onLogout}
        translations={translations}
      />

      <div style={styles.mainWrapper}>
        {/* Сайдбар */}
        <DashboardSidebar
          activeSection={activeSection}
          onMenuClick={handleMenuClick}
          isMobile={isMobile}
          translations={translations}
          language={language}
          user={user}
        />

        {/* Основной контент */}
        <div style={styles.mainContent}>
          {/* Уведомления */}
          <NotificationBanner
            show={notiShow}
            message={t.profileUpdated}
            onClose={handleCloseNotification}
          />

          {/* Контент секций */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default PersonalCabinet;