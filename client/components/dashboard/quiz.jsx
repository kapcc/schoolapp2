import React, { useState, useEffect } from 'react';
import { BookOpen, Code, Calculator, Trophy, RotateCcw, Play, Home } from 'lucide-react';

const EducationalGamesComponent = () => {
  const [currentView, setCurrentView] = useState('menu');
  const [gameStats, setGameStats] = useState({
    codeQuiz: { played: 0, bestScore: 0 },
    mathChallenge: { played: 0, bestScore: 0 }
  });

  const styles = {
    container: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    },
    menuContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #7c3aed 50%, #be185d 100%)',
      padding: '16px'
    },
    maxWidthContainer: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '48px'
    },
    headerTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '16px'
    },
    mainTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: 'white',
      margin: 0
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      margin: 0
    },
    gameGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px',
      marginBottom: '48px'
    },
    gameCard: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '32px',
      transform: 'scale(1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      color: 'white'
    },
    gameCardMath: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    gameCardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px'
    },
    gameStats: {
      textAlign: 'right',
      color: 'white'
    },
    gameTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      margin: 0
    },
    gameDescription: {
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '24px',
      opacity: 0.9
    },
    gameFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    playButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: '600'
    },
    playIcon: {
      width: '48px',
      height: '48px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    },
    statsContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '24px',
      backdropFilter: 'blur(8px)',
      textAlign: 'center'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      color: 'white'
    },
    statValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    statLabel: {
      fontSize: '0.875rem',
      opacity: 0.75
    },
    gameScreen: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    },
    quizScreen: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)'
    },
    mathScreen: {
      background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
    },
    gamePanel: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '32px',
      width: '100%',
      maxWidth: '800px'
    },
    gamePanelSmall: {
      maxWidth: '500px'
    },
    gameHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px'
    },
    gameHeaderTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0
    },
    gameHeaderStats: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    scoreText: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#8b5cf6'
    },
    timerText: {
      fontSize: '1.125rem',
      fontWeight: '600'
    },
    timerDanger: {
      color: '#ef4444'
    },
    timerSafe: {
      color: '#10b981'
    },
    progressContainer: {
      marginBottom: '24px'
    },
    progressHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '8px'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#8b5cf6',
      transition: 'width 0.3s ease',
      borderRadius: '4px'
    },
    mathProgressFill: {
      backgroundColor: '#10b981'
    },
    question: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '24px'
    },
    optionsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    option: {
      width: '100%',
      padding: '16px',
      textAlign: 'left',
      borderRadius: '8px',
      border: '2px solid #e5e7eb',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontSize: '1rem'
    },
    optionHover: {
      borderColor: '#8b5cf6',
      backgroundColor: '#f3f4f6'
    },
    optionCorrect: {
      borderColor: '#10b981',
      backgroundColor: '#d1fae5',
      color: '#065f46'
    },
    optionIncorrect: {
      borderColor: '#ef4444',
      backgroundColor: '#fee2e2',
      color: '#991b1b'
    },
    optionDisabled: {
      borderColor: '#e5e7eb',
      backgroundColor: '#f9fafb',
      color: '#9ca3af',
      cursor: 'not-allowed'
    },
    explanation: {
      marginTop: '24px',
      padding: '16px',
      backgroundColor: '#dbeafe',
      borderRadius: '8px'
    },
    explanationTitle: {
      color: '#1e40af',
      fontWeight: '600',
      marginBottom: '8px'
    },
    explanationText: {
      color: '#1e3a8a'
    },
    mathProblem: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    mathEquation: {
      fontSize: '3.75rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '24px'
    },
    mathInput: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      border: '2px solid #d1d5db',
      borderRadius: '8px',
      padding: '16px',
      width: '200px',
      outline: 'none'
    },
    mathInputFocus: {
      borderColor: '#10b981'
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#10b981',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      fontSize: '1rem'
    },
    submitButtonHover: {
      backgroundColor: '#059669'
    },
    submitButtonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    },
    resultContainer: {
      textAlign: 'center',
      marginBottom: '24px',
      padding: '16px',
      borderRadius: '8px'
    },
    resultCorrect: {
      backgroundColor: '#d1fae5',
      color: '#065f46'
    },
    resultIncorrect: {
      backgroundColor: '#fee2e2',
      color: '#991b1b'
    },
    resultTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    resultText: {
      fontSize: '1.125rem'
    },
    gameOverScreen: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '32px',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center'
    },
    gameOverTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '16px'
    },
    gameOverSubtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      marginBottom: '8px'
    },
    gameOverScore: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#8b5cf6',
      marginBottom: '24px'
    },
    gameOverScoreMath: {
      color: '#10b981'
    },
    gameOverInfo: {
      color: '#9ca3af',
      marginBottom: '24px'
    },
    buttonContainer: {
      display: 'flex',
      gap: '12px'
    },
    button: {
      flex: 1,
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontSize: '1rem'
    },
    buttonPrimary: {
      backgroundColor: '#8b5cf6',
      color: 'white'
    },
    buttonPrimaryHover: {
      backgroundColor: '#7c3aed'
    },
    buttonPrimaryMath: {
      backgroundColor: '#10b981'
    },
    buttonPrimaryMathHover: {
      backgroundColor: '#059669'
    },
    buttonSecondary: {
      backgroundColor: '#6b7280',
      color: 'white'
    },
    buttonSecondaryHover: {
      backgroundColor: '#4b5563'
    },
    loading: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loadingText: {
      color: 'white',
      fontSize: '1.25rem'
    }
  };

  const updateGameStats = (game, finalScore) => {
    setGameStats(prev => ({
      ...prev,
      [game]: {
        played: prev[game].played + 1,
        bestScore: Math.max(prev[game].bestScore, finalScore)
      }
    }));
  };

  // Игра 1: IT Квиз "Код-Мастер"
  const CodeQuizGame = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [hoveredOption, setHoveredOption] = useState(null);

    const questions = [
      {
        question: "Какой язык программирования используется для веб-разработки фронтенда?",
        options: ["Python", "JavaScript", "Java", "C++"],
        correct: 1,
        explanation: "JavaScript - основной язык для создания интерактивных веб-страниц"
      },
      {
        question: "Что означает аббревиатура API?",
        options: ["Application Programming Interface", "Advanced Programming Integration", "Automated Process Integration", "Application Process Interface"],
        correct: 0,
        explanation: "API - это интерфейс программирования приложений"
      },
      {
        question: "Какая структура данных работает по принципу LIFO?",
        options: ["Queue", "Stack", "Array", "LinkedList"],
        correct: 1,
        explanation: "Stack (стек) работает по принципу Last In, First Out"
      },
      {
        question: "Что такое Git?",
        options: ["База данных", "Система контроля версий", "Веб-сервер", "Язык программирования"],
        correct: 1,
        explanation: "Git - это распределенная система контроля версий"
      },
      {
        question: "Какой HTTP статус-код означает 'Not Found'?",
        options: ["200", "404", "500", "403"],
        correct: 1,
        explanation: "404 - стандартный код ответа HTTP, означающий, что запрашиваемый ресурс не найден"
      }
    ];

    useEffect(() => {
      if (timeLeft > 0 && !gameOver && !showResult) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else if (timeLeft === 0 && !gameOver) {
        handleTimeUp();
      }
    }, [timeLeft, gameOver, showResult]);

    const handleTimeUp = () => {
      setGameOver(true);
      updateGameStats('codeQuiz', score);
    };

    const handleAnswer = (answerIndex) => {
      if (selectedAnswer !== null) return;
      
      setSelectedAnswer(answerIndex);
      setShowResult(true);
      
      if (answerIndex === questions[currentQuestion].correct) {
        setScore(score + 10);
      }
      
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setShowResult(false);
          setTimeLeft(30);
        } else {
          setGameOver(true);
          updateGameStats('codeQuiz', score + (answerIndex === questions[currentQuestion].correct ? 10 : 0));
        }
      }, 2000);
    };

    const resetGame = () => {
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setGameOver(false);
      setTimeLeft(30);
    };

    const getOptionStyle = (index) => {
      if (selectedAnswer === null) {
        return hoveredOption === index ? {...styles.option, ...styles.optionHover} : styles.option;
      }
      
      if (selectedAnswer === index) {
        return index === questions[currentQuestion].correct 
          ? {...styles.option, ...styles.optionCorrect}
          : {...styles.option, ...styles.optionIncorrect};
      }
      
      if (index === questions[currentQuestion].correct) {
        return {...styles.option, ...styles.optionCorrect};
      }
      
      return {...styles.option, ...styles.optionDisabled};
    };

    if (gameOver) {
      return (
        <div style={{...styles.gameScreen, ...styles.quizScreen}}>
          <div style={styles.gameOverScreen}>
            <Trophy style={{width: '64px', height: '64px', color: '#eab308', margin: '0 auto 16px'}} />
            <h2 style={styles.gameOverTitle}>Игра окончена!</h2>
            <p style={styles.gameOverSubtitle}>Ваш результат:</p>
            <p style={styles.gameOverScore}>{score} очков</p>
            <p style={styles.gameOverInfo}>из {questions.length * 10} возможных</p>
            <div style={styles.buttonContainer}>
              <button
                style={{...styles.button, ...styles.buttonPrimary}}
                onClick={resetGame}
              >
                <RotateCcw style={{width: '20px', height: '20px'}} />
                Играть снова
              </button>
              <button
                style={{...styles.button, ...styles.buttonSecondary}}
                onClick={() => setCurrentView('menu')}
              >
                <Home style={{width: '20px', height: '20px'}} />
                Главная
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{...styles.gameScreen, ...styles.quizScreen}}>
        <div style={styles.gamePanel}>
          <div style={styles.gameHeader}>
            <h2 style={styles.gameHeaderTitle}>IT Квиз "Код-Мастер"</h2>
            <div style={styles.gameHeaderStats}>
              <span style={styles.scoreText}>Очки: {score}</span>
              <span style={{...styles.timerText, ...(timeLeft <= 10 ? styles.timerDanger : styles.timerSafe)}}>
                Время: {timeLeft}с
              </span>
            </div>
          </div>
          
          <div style={styles.progressContainer}>
            <div style={styles.progressHeader}>
              <span>Вопрос {currentQuestion + 1} из {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div style={styles.progressBar}>
              <div 
                style={{
                  ...styles.progressFill,
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`
                }}
              />
            </div>
          </div>

          <div style={{marginBottom: '32px'}}>
            <h3 style={styles.question}>
              {questions[currentQuestion].question}
            </h3>
            
            <div style={styles.optionsContainer}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  style={getOptionStyle(index)}
                  onMouseEnter={() => setHoveredOption(index)}
                  onMouseLeave={() => setHoveredOption(null)}
                >
                  {option}
                </button>
              ))}
            </div>
            
            {showResult && (
              <div style={styles.explanation}>
                <p style={styles.explanationTitle}>Объяснение:</p>
                <p style={styles.explanationText}>{questions[currentQuestion].explanation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Игра 2: Математический Вызов
  const MathChallengeGame = () => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [currentProblem, setCurrentProblem] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [streak, setStreak] = useState(0);
    const [inputFocused, setInputFocused] = useState(false);

    const generateProblem = (level) => {
      const operations = ['+', '-', '*'];
      const operation = operations[Math.floor(Math.random() * operations.length)];
      
      let num1, num2, answer;
      
      switch(level) {
        case 1:
          num1 = Math.floor(Math.random() * 50) + 1;
          num2 = Math.floor(Math.random() * 50) + 1;
          break;
        case 2:
          num1 = Math.floor(Math.random() * 100) + 1;
          num2 = Math.floor(Math.random() * 100) + 1;
          break;
        case 3:
          num1 = Math.floor(Math.random() * 500) + 1;
          num2 = Math.floor(Math.random() * 500) + 1;
          break;
        default:
          num1 = Math.floor(Math.random() * 1000) + 1;
          num2 = Math.floor(Math.random() * 1000) + 1;
      }
      
      if (operation === '-' && num1 < num2) {
        [num1, num2] = [num2, num1];
      }
      
      switch(operation) {
        case '+':
          answer = num1 + num2;
          break;
        case '-':
          answer = num1 - num2;
          break;
        case '*':
          if (level === 1) {
            num1 = Math.floor(Math.random() * 12) + 1;
            num2 = Math.floor(Math.random() * 12) + 1;
          } else if (level === 2) {
            num1 = Math.floor(Math.random() * 25) + 1;
            num2 = Math.floor(Math.random() * 25) + 1;
          }
          answer = num1 * num2;
          break;
      }
      
      return { num1, num2, operation, answer };
    };

    useEffect(() => {
      if (!currentProblem) {
        setCurrentProblem(generateProblem(currentLevel));
      }
    }, [currentLevel, currentProblem]);

    useEffect(() => {
      if (timeLeft > 0 && !gameOver && !showResult) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else if (timeLeft === 0 && !gameOver) {
        setGameOver(true);
        updateGameStats('mathChallenge', score);
      }
    }, [timeLeft, gameOver, showResult]);

    const handleSubmit = () => {
      if (userAnswer === '') return;
      
      const userNum = parseInt(userAnswer);
      const correct = userNum === currentProblem.answer;
      
      setIsCorrect(correct);
      setShowResult(true);
      
      if (correct) {
        const points = currentLevel * 5 + (streak * 2);
        setScore(score + points);
        setStreak(streak + 1);
        
        if (streak > 0 && streak % 5 === 0) {
          setCurrentLevel(Math.min(currentLevel + 1, 5));
        }
      } else {
        setStreak(0);
      }
      
      setTimeout(() => {
        setCurrentProblem(generateProblem(currentLevel));
        setUserAnswer('');
        setShowResult(false);
      }, 1500);
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    };

    const resetGame = () => {
      setCurrentLevel(1);
      setScore(0);
      setCurrentProblem(null);
      setUserAnswer('');
      setShowResult(false);
      setGameOver(false);
      setTimeLeft(60);
      setStreak(0);
    };

    if (gameOver) {
      return (
        <div style={{...styles.gameScreen, ...styles.mathScreen}}>
          <div style={styles.gameOverScreen}>
            <Calculator style={{width: '64px', height: '64px', color: '#eab308', margin: '0 auto 16px'}} />
            <h2 style={styles.gameOverTitle}>Время вышло!</h2>
            <p style={styles.gameOverSubtitle}>Ваш результат:</p>
            <p style={{...styles.gameOverScore, ...styles.gameOverScoreMath}}>{score} очков</p>
            <p style={styles.gameOverInfo}>Уровень: {currentLevel}</p>
            <div style={styles.buttonContainer}>
              <button
                style={{...styles.button, ...styles.buttonPrimaryMath}}
                onClick={resetGame}
              >
                <RotateCcw style={{width: '20px', height: '20px'}} />
                Играть снова
              </button>
              <button
                style={{...styles.button, ...styles.buttonSecondary}}
                onClick={() => setCurrentView('menu')}
              >
                <Home style={{width: '20px', height: '20px'}} />
                Главная
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (!currentProblem) {
      return (
        <div style={styles.loading}>
          <div style={styles.loadingText}>Загрузка...</div>
        </div>
      );
    }

    return (
      <div style={{...styles.gameScreen, ...styles.mathScreen}}>
        <div style={{...styles.gamePanel, ...styles.gamePanelSmall}}>
          <div style={styles.gameHeader}>
            <h2 style={styles.gameHeaderTitle}>Математический Вызов</h2>
            <div style={{textAlign: 'right'}}>
              <div style={{...styles.scoreText, color: '#10b981'}}>Очки: {score}</div>
              <div style={{...styles.timerText, ...(timeLeft <= 10 ? styles.timerDanger : {color: '#6b7280'}), fontSize: '0.875rem'}}>
                Время: {timeLeft}с
              </div>
            </div>
          </div>
          
          <div style={styles.progressContainer}>
            <div style={styles.progressHeader}>
              <span>Уровень: {currentLevel}</span>
              <span>Серия: {streak}</span>
            </div>
            <div style={styles.progressBar}>
              <div 
                style={{
                  ...styles.progressFill,
                  ...styles.mathProgressFill,
                  width: `${(currentLevel / 5) * 100}%`
                }}
              />
            </div>
          </div>

          <div style={styles.mathProblem}>
            <div style={styles.mathEquation}>
              {currentProblem.num1} {currentProblem.operation} {currentProblem.num2} = ?
            </div>
            
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              style={{
                ...styles.mathInput,
                ...(inputFocused ? styles.mathInputFocus : {})
              }}
              placeholder="?"
              disabled={showResult}
            />
          </div>

          {showResult && (
            <div style={{
              ...styles.resultContainer,
              ...(isCorrect ? styles.resultCorrect : styles.resultIncorrect)
            }}>
              <div style={styles.resultTitle}>
                {isCorrect ? '✓ Правильно!' : '✗ Неправильно'}
              </div>
              {!isCorrect && (
                <div style={styles.resultText}>
                  Правильный ответ: {currentProblem.answer}
                </div>
              )}
              {isCorrect && streak > 1 && (
                <div style={styles.resultText}>
                  Серия: {streak} 🔥
                </div>
              )}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={showResult || userAnswer === ''}
            style={{
              ...styles.submitButton,
              ...(showResult || userAnswer === '' ? styles.submitButtonDisabled : {})
            }}
          >
            Ответить
          </button>
        </div>
      </div>
    );
  };

  // Главное меню
  const MainMenu = () => {
    const games = [
      {
        id: 'codeQuiz',
        title: 'IT Квиз "Код-Мастер"',
        description: 'Проверьте свои знания в области программирования и IT технологий',
        icon: Code,
        style: styles.gameCard
      },
      {
        id: 'mathChallenge',
        title: 'Математический Вызов',
        description: 'Решайте математические примеры на скорость и точность',
        icon: Calculator,
        style: {...styles.gameCard, ...styles.gameCardMath}
      }
    ];

    return (
      <div style={styles.container}>
        <div style={styles.menuContainer}>
          <div style={styles.maxWidthContainer}>
            <div style={styles.header}>
              <div style={styles.headerTitle}>
                <BookOpen style={{width: '48px', height: '48px', color: 'white'}} />
                <h1 style={styles.mainTitle}>Образовательные Игры</h1>
              </div>
              <p style={styles.subtitle}>Развивайте свои навыки в IT и математике играя!</p>
            </div>

            <div style={styles.gameGrid}>
              {games.map((game) => {
                const Icon = game.icon;
                return (
                  <div
                    key={game.id}
                    style={game.style}
                    onClick={() => setCurrentView(game.id)}
                  >
                    <div style={styles.gameCardHeader}>
                      <Icon style={{width: '64px', height: '64px', color: 'white'}} />
                      <div style={styles.gameStats}>
                        <div style={{fontSize: '0.875rem', opacity: 0.75}}>Лучший результат</div>
                        <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{gameStats[game.id].bestScore}</div>
                        <div style={{fontSize: '0.75rem', opacity: 0.75}}>Игр сыграно: {gameStats[game.id].played}</div>
                      </div>
                    </div>
                    
                    <h2 style={styles.gameTitle}>{game.title}</h2>
                    <p style={styles.gameDescription}>{game.description}</p>
                    
                    <div style={styles.gameFooter}>
                      <div style={styles.playButton}>
                        <Play style={{width: '20px', height: '20px'}} />
                        <span>Играть</span>
                      </div>
                      <div style={styles.playIcon}>
                        <div style={{
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid white',
                          borderTop: '6px solid transparent',
                          borderBottom: '6px solid transparent',
                          marginLeft: '4px'
                        }}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={styles.statsContainer}>
              <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '16px'}}>Статистика</h3>
              <div style={styles.statsGrid}>
                <div>
                  <div style={styles.statValue}>{gameStats.codeQuiz.played + gameStats.mathChallenge.played}</div>
                  <div style={styles.statLabel}>Всего игр</div>
                </div>
                <div>
                  <div style={styles.statValue}>{gameStats.codeQuiz.bestScore + gameStats.mathChallenge.bestScore}</div>
                  <div style={styles.statLabel}>Общий лучший результат</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {currentView === 'menu' && <MainMenu />}
      {currentView === 'codeQuiz' && <CodeQuizGame />}
      {currentView === 'mathChallenge' && <MathChallengeGame />}
    </div>
  );
};

export default EducationalGamesComponent;