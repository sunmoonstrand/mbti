// 背景颜色选项
export const backgroundOptions = [
  {
    name: "温暖橙红",
    description: "活力四射，充满温暖",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)",
    emoji: "🔥",
    theme: {
      buttonGradient: "linear-gradient(45deg, #ff4757, #ff6348)",
      cardOpacity: 0.12,
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
      primaryColor: "#ffffff",
      accentColor: "#fff2e6",
      textColor: "rgba(255, 255, 255, 0.95)",
      headingColor: "#ffffff",
    },
  },
  {
    name: "清新绿色",
    description: "自然舒适，清新宜人",
    gradient: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
    emoji: "🌿",
    theme: {
      buttonGradient: "linear-gradient(45deg, #00b894, #00a085)",
      cardOpacity: 0.1,
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
      primaryColor: "#ffffff",
      accentColor: "#e8f8f5",
      textColor: "rgba(255, 255, 255, 0.95)",
      headingColor: "#ffffff",
    },
  },
  {
    name: "优雅粉色",
    description: "温柔浪漫，优雅迷人",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    emoji: "🌸",
    theme: {
      buttonGradient: "linear-gradient(45deg, #fd79a8, #e84393)",
      cardOpacity: 0.15,
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      primaryColor: "#2d3748",
      accentColor: "#4a5568",
      textColor: "rgba(45, 55, 72, 0.9)",
      headingColor: "#2d3748",
    },
  },
  {
    name: "深邃紫黑",
    description: "神秘高级，沉稳大气",
    gradient: "linear-gradient(135deg, #2c3e50 0%, #4a6741 100%)",
    emoji: "🌌",
    theme: {
      buttonGradient: "linear-gradient(45deg, #6c5ce7, #a29bfe)",
      cardOpacity: 0.15,
      textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
      primaryColor: "#f1f2f6",
      accentColor: "#dfe6e9",
      textColor: "rgba(255, 255, 255, 0.95)",
      headingColor: "#ffffff",
    },
  },
  {
    name: "日落黄橙",
    description: "温暖治愈，如日落般美好",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    emoji: "🌅",
    theme: {
      buttonGradient: "linear-gradient(45deg, #fd79a8, #fdcb6e)",
      cardOpacity: 0.1,
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
      primaryColor: "#ffffff",
      accentColor: "#fff5f5",
      textColor: "rgba(255, 255, 255, 0.95)",
      headingColor: "#ffffff",
    },
  },
  {
    name: "薄荷青色",
    description: "清凉舒爽，如薄荷般清新",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    emoji: "🍃",
    theme: {
      buttonGradient: "linear-gradient(45deg, #00cec9, #55a3ff)",
      cardOpacity: 0.12,
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      primaryColor: "#2d3748",
      accentColor: "#4a5568",
      textColor: "rgba(45, 55, 72, 0.9)",
      headingColor: "#2d3748",
    },
  },
  {
    name: "玫瑰金",
    description: "奢华典雅，玫瑰金质感",
    gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    emoji: "🌹",
    theme: {
      buttonGradient: "linear-gradient(45deg, #e17055, #fdcb6e)",
      cardOpacity: 0.1,
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
      primaryColor: "#2d3748",
      accentColor: "#4a5568",
      textColor: "rgba(45, 55, 72, 0.9)",
      headingColor: "#2d3748",
    },
  },
  {
    name: "海洋蓝绿",
    description: "清爽宁静，如海洋般深邃",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    emoji: "🌊",
    theme: {
      buttonGradient: "linear-gradient(45deg, #74b9ff, #0984e3)",
      cardOpacity: 0.12,
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
      primaryColor: "#ffffff",
      accentColor: "#eff6ff",
      textColor: "rgba(255, 255, 255, 0.95)",
      headingColor: "#ffffff",
    },
  },
];

export function applyBackground(gradient) {
  document.body.style.background = gradient;
}

// 应用主题样式
export function applyTheme(themeData) {
  if (!themeData) return;

  const root = document.documentElement;

  // 设置CSS变量
  root.style.setProperty("--button-gradient", themeData.buttonGradient);
  root.style.setProperty("--card-opacity", themeData.cardOpacity);
  root.style.setProperty("--text-shadow", themeData.textShadow);
  root.style.setProperty("--primary-color", themeData.primaryColor);
  root.style.setProperty("--accent-color", themeData.accentColor);
  root.style.setProperty("--text-color", themeData.textColor);
  root.style.setProperty("--heading-color", themeData.headingColor);
}

// 获取背景选项
export function getBackgroundOption(gradient) {
  return backgroundOptions.find((option) => option.gradient === gradient);
}
