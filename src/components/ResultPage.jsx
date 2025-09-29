import { useState } from "react";
import "./ResultPage.css";

function ResultPage({ result, onRestart }) {
  if (!result) return null;

  const {
    type,
    scores,
    personality,
    confidence,
    dimensions: resultDimensions,
    averageStrength,
  } = result;

  // 置信度显示
  const getConfidenceInfo = () => {
    switch (confidence) {
      case "high":
        return {
          text: "高置信度",
          color: "#10b981",
          description: "结果非常可靠，各维度特征明显",
        };
      case "moderate":
        return {
          text: "中等置信度",
          color: "#f59e0b",
          description: "结果可靠，部分维度可能有些灵活性",
        };
      case "low":
        return {
          text: "低置信度",
          color: "#ef4444",
          description: "建议重新测试或更加深入了解自己",
        };
      default:
        return {
          text: "中等置信度",
          color: "#f59e0b",
          description: "结果可靠",
        };
    }
  };

  const confidenceInfo = getConfidenceInfo();

  // 兼容旧版本的维度格式（如果没有新的dimensions数据）
  const dimensions = resultDimensions || [
    {
      name: "能量来源",
      winner: scores.E > scores.I ? "外向 (E)" : "内向 (I)",
      percentage: Math.round(
        (Math.max(scores.E, scores.I) / (scores.E + scores.I)) * 100
      ),
    },
    {
      name: "信息收集",
      winner: scores.S > scores.N ? "感知 (S)" : "直觉 (N)",
      percentage: Math.round(
        (Math.max(scores.S, scores.N) / (scores.S + scores.N)) * 100
      ),
    },
    {
      name: "决策方式",
      winner: scores.T > scores.F ? "思考 (T)" : "情感 (F)",
      percentage: Math.round(
        (Math.max(scores.T, scores.F) / (scores.T + scores.F)) * 100
      ),
    },
    {
      name: "生活方式",
      winner: scores.J > scores.P ? "判断 (J)" : "知觉 (P)",
      percentage: Math.round(
        (Math.max(scores.J, scores.P) / (scores.J + scores.P)) * 100
      ),
    },
  ];

  const [showShareModal, setShowShareModal] = useState(false);

  const shareText = `我刚刚完成了MBTI性格测试，我的类型是${type} - ${personality.name}！${personality.description} 快来测试你的性格类型吧！`;

  const shareToWeChat = () => {
    // 检测是否在微信内置浏览器
    const isWeChat = /micromessenger/i.test(navigator.userAgent);

    if (isWeChat) {
      // 在微信中，显示分享引导
      alert(
        "请点击右上角的「...」按钮，然后选择「分享给朋友」或「分享到朋友圈」"
      );
    } else {
      // 非微信环境，生成微信分享链接
      const wechatUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        window.location.href
      )}`;
      window.open(wechatUrl, "_blank");
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${shareText} ${window.location.href}`
      );
      alert("结果已复制到剪贴板！可以直接粘贴到微信或其他社交平台分享");
    } catch (err) {
      // 降级方案
      const textArea = document.createElement("textarea");
      textArea.value = `${shareText} ${window.location.href}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("结果已复制到剪贴板！");
    }
  };

  const shareToQQ = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("MBTI性格测试结果");
    const desc = encodeURIComponent(shareText);
    window.open(
      `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&desc=${desc}`,
      "_blank"
    );
  };

  const shareToWeibo = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(shareText);
    window.open(
      `https://service.weibo.com/share/share.php?url=${url}&title=${title}`,
      "_blank"
    );
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "MBTI性格测试结果",
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          copyToClipboard();
        }
      }
    } else {
      setShowShareModal(true);
    }
  };

  return (
    <div className="result-page">
      <div className="result-container">
        <div className="result-header">
          <div className="result-type">
            <h1 className="type-code">{type}</h1>
            <h2 className="type-name">{personality.name}</h2>
            <p className="type-description">{personality.description}</p>
            {confidence && (
              <div
                className="confidence-badge"
                style={{ backgroundColor: confidenceInfo.color }}
              >
                <span className="confidence-text">{confidenceInfo.text}</span>
                <span className="confidence-desc">
                  {confidenceInfo.description}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="content-grid">
          {/* 性格特征 */}
          <div className="info-card">
            <h3>你的性格特征</h3>
            <div className="traits-list">
              {personality.traits.map((trait, index) => (
                <span key={index} className="trait-tag">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* 优势能力 */}
          <div className="info-card">
            <h3>你的优势能力</h3>
            <ul className="strengths-list">
              {personality.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          {/* 适合职业 */}
          <div className="info-card">
            <h3>适合的职业</h3>
            <div className="careers-grid">
              {personality.careers.map((career, index) => (
                <span key={index} className="career-tag">
                  {career}
                </span>
              ))}
            </div>
          </div>

          {/* 维度分析 */}
          <div className="info-card dimensions-card">
            <h3>详细维度分析</h3>
            {averageStrength && (
              <div className="analysis-summary">
                <p>
                  平均维度强度：<strong>{averageStrength}%</strong>
                </p>
              </div>
            )}
            <div className="dimensions-analysis">
              {dimensions.map((dimension, index) => (
                <div key={index} className="dimension-item">
                  <div className="dimension-header">
                    <span className="dimension-name">{dimension.name}</span>
                    <span className="dimension-winner">
                      {dimension.winner} ({dimension.percentage}%)
                    </span>
                  </div>
                  <div className="dimension-bar">
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: `${dimension.percentage}%`,
                          backgroundColor:
                            dimension.percentage >= 70
                              ? "#10b981"
                              : dimension.percentage >= 60
                              ? "#f59e0b"
                              : "#6b7280",
                        }}
                      ></div>
                    </div>
                    <div className="strength-indicator">
                      {dimension.strength === "strong" && (
                        <span className="strength strong">强烈倾向</span>
                      )}
                      {dimension.strength === "moderate" && (
                        <span className="strength moderate">中等倾向</span>
                      )}
                      {dimension.strength === "slight" && (
                        <span className="strength slight">轻微倾向</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="share-btn" onClick={nativeShare}>
            分享结果
          </button>
          <button className="restart-btn" onClick={onRestart}>
            重新测试
          </button>
        </div>

        {/* 分享模态框 */}
        {showShareModal && (
          <div
            className="share-modal-overlay"
            onClick={() => setShowShareModal(false)}
          >
            <div className="share-modal" onClick={(e) => e.stopPropagation()}>
              <div className="share-modal-header">
                <h3>分享到</h3>
                <button
                  className="close-btn"
                  onClick={() => setShowShareModal(false)}
                >
                  ×
                </button>
              </div>
              <div className="share-options">
                <div className="share-option" onClick={shareToWeChat}>
                  <div className="share-icon wechat">💬</div>
                  <span>微信</span>
                </div>
                <div className="share-option" onClick={shareToQQ}>
                  <div className="share-icon qq">🐧</div>
                  <span>QQ</span>
                </div>
                <div className="share-option" onClick={shareToWeibo}>
                  <div className="share-icon weibo">📝</div>
                  <span>微博</span>
                </div>
                <div className="share-option" onClick={copyToClipboard}>
                  <div className="share-icon copy">📋</div>
                  <span>复制链接</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
