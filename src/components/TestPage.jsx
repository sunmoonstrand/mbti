import { useState } from "react";
import { questions, calculateMBTI } from "../mbtiData";
import "./TestPage.css";

function TestPage({ onComplete, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // 测试完成，计算结果
      const result = calculateMBTI(newAnswers);
      onComplete(result);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]);
      setAnswers(answers.slice(0, -1));
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="test-page">
      <div className="test-container">
        <div className="test-header">
          <button className="back-btn" onClick={onBack}>
            ← 返回首页
          </button>
          <div className="progress-info">
            <span>
              问题 {currentQuestion + 1} / {questions.length}
            </span>
          </div>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="question-card">
          <h2 className="question-title">
            {questions[currentQuestion].question}
          </h2>

          <div className="answers-grid">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                className={`answer-btn ${
                  selectedAnswer === index ? "selected" : ""
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <span className="answer-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="answer-text">{answer.text}</span>
              </button>
            ))}
          </div>

          <div className="navigation-buttons">
            {currentQuestion > 0 && (
              <button className="nav-btn prev-btn" onClick={handlePrevious}>
                ← 上一题
              </button>
            )}

            <button
              className={`nav-btn next-btn ${
                selectedAnswer === null ? "disabled" : ""
              }`}
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              {currentQuestion === questions.length - 1
                ? "查看结果"
                : "下一题 →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
