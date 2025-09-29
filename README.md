# MBTI 性格测试

一个现代化的在线 MBTI（Myers-Briggs Type Indicator）性格测试应用，帮助用户了解自己的性格类型。

![MBTI测试](https://img.shields.io/badge/MBTI-性格测试-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![Vite](https://img.shields.io/badge/Vite-5.3.4-646cff)

## 🌟 功能特性

- **专业测试**：28 道精心设计的题目，科学评估四个维度
- **16 种性格类型**：完整的 MBTI 性格类型描述和职业建议
- **智能评分**：置信度评估和详细的性格分析
- **多主题背景**：8 种精美的渐变背景主题可选
- **响应式设计**：完美适配手机、平板和桌面设备
- **分享功能**：支持微信等社交平台分享测试结果
- **现代 UI**：简洁美观的用户界面设计

## 🎯 MBTI 四个维度

| 维度                         | 对立面   | 描述                                     |
| ---------------------------- | -------- | ---------------------------------------- |
| **外向 (E)** vs **内向 (I)** | 能量来源 | 从外部世界获得能量 vs 从内心世界获得能量 |
| **感知 (S)** vs **直觉 (N)** | 信息收集 | 关注具体事实 vs 关注整体模式             |
| **思考 (T)** vs **情感 (F)** | 决策方式 | 基于逻辑分析 vs 基于价值判断             |
| **判断 (J)** vs **知觉 (P)** | 生活方式 | 喜欢计划性 vs 喜欢灵活性                 |

## 🚀 快速开始

### 环境要求

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**

```bash
git clone https://github.com/sunmoonstrand/mbti.git
cd mbti
```

2. **安装依赖**

```bash
npm install
```

3. **启动开发服务器**

```bash
npm run dev
```

4. **访问应用**
   打开浏览器访问 `http://localhost:5173`

## 📦 构建和部署

### 本地构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 部署选项

#### 1. Vercel（推荐）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

#### 2. Netlify

拖拽 `dist` 文件夹到 [Netlify](https://netlify.com) 部署区域

#### 3. GitHub Pages

```bash
npm run build
# 将 dist 文件夹内容推送到 gh-pages 分支
```

更多部署详情请参考 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📱 项目结构

```
mbti/
├── src/
│   ├── components/          # React 组件
│   │   ├── TestPage.jsx    # 测试页面组件
│   │   ├── TestPage.css    # 测试页面样式
│   │   ├── ResultPage.jsx  # 结果页面组件
│   │   └── ResultPage.css  # 结果页面样式
│   ├── App.jsx             # 主应用组件
│   ├── App.css             # 主应用样式
│   ├── main.jsx            # 应用入口
│   ├── index.css           # 全局样式
│   ├── mbtiData.js         # MBTI 数据和逻辑
│   └── backgroundOptions.js # 背景主题配置
├── public/                 # 静态资源
├── dist/                   # 构建输出（构建后生成）
├── package.json           # 项目配置
├── vite.config.js         # Vite 配置
├── README.md              # 项目说明
└── DEPLOYMENT.md          # 部署指南
```

## 🎨 主题定制

应用内置 8 种精美的背景主题：

- 🔥 温暖橙红
- 🌊 海洋蓝绿
- 🌸 浪漫粉紫
- 🌅 日出金黄
- 🌿 自然绿意
- 🌌 神秘深紫
- ☁️ 清新天蓝
- 🌙 优雅灰蓝

用户可在首页点击调色板图标自由切换主题。

## 🔧 技术栈

- **前端框架**：React 18.3.1
- **构建工具**：Vite 5.3.4
- **样式**：原生 CSS（无第三方 UI 库）
- **代码规范**：ESLint
- **开发环境**：支持热重载

## 📊 性能优化

- 构建后总体积小于 200KB
- CSS 文件：~18KB（gzip 后 ~3.6KB）
- JavaScript 文件：~165KB（gzip 后 ~55KB）
- 支持现代浏览器的所有特性
- 响应式设计，移动端友好

## 🤝 贡献指南

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- MBTI 理论基于 Myers-Briggs Type Indicator
- UI 设计灵感来自现代化的心理测试平台
- 感谢所有贡献者的参与和支持
