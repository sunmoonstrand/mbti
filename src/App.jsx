import { useState, useEffect } from "react";
import "./App.css";
import TestPage from "./components/TestPage";
import ResultPage from "./components/ResultPage";
import {
  backgroundOptions,
  applyBackground,
  applyTheme,
} from "./backgroundOptions";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'test', 'result'
  const [testResult, setTestResult] = useState(null);
  const [showBackgroundSelector, setShowBackgroundSelector] = useState(false);

  // 初始化默认主题
  useEffect(() => {
    // 应用默认背景和主题
    const defaultOption = backgroundOptions[5]; // 温暖橙红
    applyBackground(defaultOption.gradient);
    applyTheme(defaultOption.theme);
  }, []);

  const startTest = () => {
    setCurrentPage("test");
  };

  const handleTestComplete = (result) => {
    setTestResult(result);
    setCurrentPage("result");
  };

  const restartTest = () => {
    setTestResult(null);
    setCurrentPage("home");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "test":
        return (
          <TestPage
            onComplete={handleTestComplete}
            onBack={() => setCurrentPage("home")}
          />
        );
      case "result":
        return <ResultPage result={testResult} onRestart={restartTest} />;
      default:
        return (
          <div className="home-page">
            {/* 背景选择器按钮 */}
            <button
              className="bg-selector-btn"
              onClick={() => setShowBackgroundSelector(!showBackgroundSelector)}
              title="更换背景颜色"
            >
              🎨
            </button>

            {/* 背景选择器面板 */}
            {showBackgroundSelector && (
              <div className="bg-selector-panel">
                <h4>选择背景颜色</h4>
                <div className="bg-options-grid">
                  {backgroundOptions.map((option, index) => (
                    <div
                      key={index}
                      className="bg-option"
                      onClick={() => {
                        applyBackground(option.gradient);
                        applyTheme(option.theme);
                        setShowBackgroundSelector(false);
                      }}
                    >
                      <div
                        className="bg-preview"
                        style={{ background: option.gradient }}
                      ></div>
                      <div className="bg-info">
                        <span className="bg-emoji">{option.emoji}</span>
                        <span className="bg-name">{option.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="hero-section">
              <h1 className="main-title">MBTI 性格测试</h1>
              <p className="subtitle">发现你的性格类型，了解真实的自己</p>

              <div className="intro-content">
                <div className="intro-card">
                  <h3>什么是 MBTI？</h3>
                  <p>
                    MBTI（Myers-Briggs Type Indicator）是一种性格分类理论模型，
                    通过四个维度将人的性格分为16种类型，帮助你更好地了解自己的行为模式、
                    思维方式和决策风格。
                  </p>
                </div>

                <div className="dimensions-grid">
                  <div className="dimension-card">
                    <h4>外向 (E) vs 内向 (I)</h4>
                    <p>你从哪里获得能量？</p>
                  </div>
                  <div className="dimension-card">
                    <h4>感知 (S) vs 直觉 (N)</h4>
                    <p>你如何收集信息？</p>
                  </div>
                  <div className="dimension-card">
                    <h4>思考 (T) vs 情感 (F)</h4>
                    <p>你如何做决定？</p>
                  </div>
                  <div className="dimension-card">
                    <h4>判断 (J) vs 知觉 (P)</h4>
                    <p>你如何组织生活？</p>
                  </div>
                </div>
              </div>

              <button className="start-btn" onClick={startTest}>
                开始测试
                <span className="btn-arrow">→</span>
              </button>

              <div className="test-info">
                <p>🕐 约需 8-12 分钟 | 📊 28 道题目 | 🎯 高精度结果</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
