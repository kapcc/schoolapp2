import React from "react";
import { Card, Progress, Button } from "antd";
import { useState } from "react";

const ButtonStyle = {
  marginBottom: "20px",
};

const quizData = {
  quest1: {
    id: 1,
    title: "Vopros1",
    variant1: "variant1",
    variant2: "variant2",
    variant3: "variant3",
    isCorrect: "2",
  },
  quest2: {
    id: 2,
    title: "Vopros2",
    variant1: "variant1",
    variant2: "variant2",
    variant3: "variant3",
    isCorrect: "1",
  },
  quest3: {
    id: 3,
    title: "Vopros3",
    variant1: "variant1",
    variant2: "variant2",
    variant3: "variant3",
    isCorrect: "3",
  },
  quest4: {
    id: 4,
    title: "Vopros4",
    variant1: "variant1",
    variant2: "variant2",
    variant3: "variant3",
    isCorrect: "1",
  },
};

const Quiz  = ()=> {
  const twoColors = {
    "0%": "#108ee9",
    "100%": "#87d068",
  };
  const [step, setStep] = useState(1);
  const [progressBar, setProgressBar] = useState(0);
  const [quiestionsCount, setQuiestionsCount] = useState(
    Object.keys(quizData).length || 0
  );
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [result, setResult] = useState(false);

  function onClickVariant(quest, e) {
    setStep(step + 1);
    setProgressBar(100 / quiestionsCount + progressBar);
    if (e.target.innerText[0] == quest.isCorrect) {
      setCorrectAnswer(correctAnswer + 1);
    }
    if (step == quizDataArray.length) {
      setResult(true);
    }
  }

  const quizDataArray = Object.entries(quizData).map(([questKey, quest]) => (
    <Card
      key={quest.id}
      variant="borderless"
      style={{
        width: "60%",
        marginBottom: 20,
        height: "40vh",
        boxShadow: "4px 4px 30px 0px rgba(34, 60, 80, 0.2)",
      }}
    >
      <Progress
        percent={progressBar.toFixed(0)}
        percentPosition={{ align: "center", type: "outer" }}
        strokeColor={twoColors}
      />
      <p style={{ textAlign: "center" }}>{quest.title}</p>
      <Button
        onClick={(e) => onClickVariant(quest, e)}
        style={ButtonStyle}
        block
      >
        1.{quest.variant1}
      </Button>

      <Button
        onClick={(e) => onClickVariant(quest, e)}
        style={ButtonStyle}
        block
      >
        2.{quest.variant2}
      </Button>

      <Button
        onClick={(e) => onClickVariant(quest, e)}
        style={ButtonStyle}
        block
      >
        3.{quest.variant3}
      </Button>
      <p>{correctAnswer}</p>
    </Card>
  ));

  return (
    <>
      {result ? (
        <Card
          variant="borderless"
          style={{ width: "60%", marginBottom: 20, height: "40vh" }}
        >
          <p>ВЫ ПРЕКРАСНЫ</p>
          <p>{correctAnswer}</p>
        </Card>
      ) : (
        quizDataArray[step - 1]
      )}
    </>
  );
}

export default Quiz;
