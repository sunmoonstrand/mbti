// MBTI 测试题目和评分逻辑

// MBTI 16种性格类型描述
export const personalityTypes = {
  INTJ: {
    name: "建筑师",
    description: "富有想象力和战略性的思想家，一切皆在计划之中。",
    traits: ["内向", "直觉", "思考", "判断"],
    strengths: ["独立思考", "战略规划", "系统思维", "追求完美"],
    careers: ["科学家", "工程师", "研究员", "战略顾问"],
  },
  INTP: {
    name: "思想家",
    description: "具有创新性的发明家，对知识有着不可阻挡的渴望。",
    traits: ["内向", "直觉", "思考", "知觉"],
    strengths: ["理论思维", "逻辑分析", "创新能力", "独立性"],
    careers: ["程序员", "数学家", "理论研究员", "哲学家"],
  },
  ENTJ: {
    name: "指挥官",
    description: "大胆、富有想象力、意志强烈的领导者，总能找到或创造解决方法。",
    traits: ["外向", "直觉", "思考", "判断"],
    strengths: ["领导能力", "战略思维", "决策果断", "目标导向"],
    careers: ["CEO", "管理顾问", "企业家", "政治家"],
  },
  ENTP: {
    name: "辩论家",
    description: "聪明好奇的思想家，不会放过任何智力挑战的机会。",
    traits: ["外向", "直觉", "思考", "知觉"],
    strengths: ["创新思维", "适应能力", "沟通技巧", "激励他人"],
    careers: ["创业家", "营销专家", "发明家", "记者"],
  },
  INFJ: {
    name: "提倡者",
    description: "安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。",
    traits: ["内向", "直觉", "情感", "判断"],
    strengths: ["洞察力", "同理心", "理想主义", "坚持不懈"],
    careers: ["心理咨询师", "作家", "社会工作者", "教师"],
  },
  INFP: {
    name: "调停者",
    description: "诗意、善良的利他主义者，总是热心为正当理由贡献力量。",
    traits: ["内向", "直觉", "情感", "知觉"],
    strengths: ["创造力", "适应性", "热情", "个人价值"],
    careers: ["艺术家", "作家", "心理学家", "人力资源"],
  },
  ENFJ: {
    name: "主人公",
    description: "富有魅力、鼓舞人心的领导者，有着感化他人的能力。",
    traits: ["外向", "直觉", "情感", "判断"],
    strengths: ["感染力", "沟通能力", "组织能力", "关怀他人"],
    careers: ["教师", "培训师", "政治家", "社会工作者"],
  },
  ENFP: {
    name: "活动家",
    description: "热情、有创造力、充满活力的自由精神，总能找到微笑的理由。",
    traits: ["外向", "直觉", "情感", "知觉"],
    strengths: ["热情", "创造力", "社交能力", "鼓舞他人"],
    careers: ["记者", "演员", "心理咨询师", "公关专家"],
  },
  ISTJ: {
    name: "物流师",
    description: "实用主义的事实家，可靠性毋庸置疑。",
    traits: ["内向", "感知", "思考", "判断"],
    strengths: ["责任感", "组织能力", "实用性", "坚持不懈"],
    careers: ["会计师", "审计师", "管理员", "工程师"],
  },
  ISFJ: {
    name: "守护者",
    description: "非常专注、温暖的守护者，时刻准备保护爱的人。",
    traits: ["内向", "感知", "情感", "判断"],
    strengths: ["支持性", "可靠性", "耐心", "实用性"],
    careers: ["护士", "教师", "社会工作者", "图书管理员"],
  },
  ESTJ: {
    name: "总经理",
    description: "出色的管理者，在管理事情或人员方面无与伦比。",
    traits: ["外向", "感知", "思考", "判断"],
    strengths: ["组织能力", "实用性", "诚实直接", "献身精神"],
    careers: ["项目经理", "销售经理", "法官", "军官"],
  },
  ESFJ: {
    name: "执政官",
    description:
      "极其关心他人、乐于合作的人，总是渴望在受欢迎的事情上帮助他人。",
    traits: ["外向", "感知", "情感", "判断"],
    strengths: ["同情心", "合作能力", "实用性", "尽职尽责"],
    careers: ["护士", "教师", "社会工作者", "人力资源"],
  },
  ISTP: {
    name: "鉴赏家",
    description: "大胆而实用的实验家，擅长使用各种工具。",
    traits: ["内向", "感知", "思考", "知觉"],
    strengths: ["适应性", "实用性", "冷静", "解决问题"],
    careers: ["机械师", "工程师", "飞行员", "外科医生"],
  },
  ISFP: {
    name: "探险家",
    description: "灵活、迷人的艺术家，时刻准备探索新的可能性。",
    traits: ["内向", "感知", "情感", "知觉"],
    strengths: ["艺术感", "灵活性", "魅力", "自然性"],
    careers: ["艺术家", "音乐家", "设计师", "心理咨询师"],
  },
  ESTP: {
    name: "企业家",
    description: "聪明、充满活力、善于感知的人，真正享受生活在边缘的感觉。",
    traits: ["外向", "感知", "思考", "知觉"],
    strengths: ["适应性", "实用性", "观察力", "精力充沛"],
    careers: ["销售代表", "警察", "企业家", "运动员"],
  },
  ESFP: {
    name: "娱乐家",
    description: "自发的、充满活力、热情的人 - 生活永远不会无聊。",
    traits: ["外向", "感知", "情感", "知觉"],
    strengths: ["热情", "即兴发挥", "灵活性", "人际交往"],
    careers: ["演员", "音乐家", "销售代表", "活动策划"],
  },
};

// 测试题目
export const questions = [
  // E vs I (外向 vs 内向)
  {
    id: 1,
    question: "在社交聚会中，你更倾向于：",
    answers: [
      { text: "主动与很多人交谈，成为焦点", dimension: "E", value: 2 },
      { text: "与少数几个人深入交谈", dimension: "I", value: 2 },
      { text: "观察周围的人和环境", dimension: "I", value: 1 },
      { text: "帮助组织活动或游戏", dimension: "E", value: 1 },
    ],
  },
  {
    id: 2,
    question: "当你需要充电恢复精力时，你更喜欢：",
    answers: [
      { text: "与朋友聚会聊天", dimension: "E", value: 2 },
      { text: "独自待在安静的地方", dimension: "I", value: 2 },
      { text: "参加热闹的活动", dimension: "E", value: 1 },
      { text: "读书或听音乐", dimension: "I", value: 1 },
    ],
  },

  // S vs N (感知 vs 直觉)
  {
    id: 3,
    question: "在学习新事物时，你更关注：",
    answers: [
      { text: "具体的事实和细节", dimension: "S", value: 2 },
      { text: "整体概念和可能性", dimension: "N", value: 2 },
      { text: "实际的应用方法", dimension: "S", value: 1 },
      { text: "理论背景和原理", dimension: "N", value: 1 },
    ],
  },
  {
    id: 4,
    question: "你更容易注意到：",
    answers: [
      { text: "周围环境的具体变化", dimension: "S", value: 2 },
      { text: "事物之间的联系和模式", dimension: "N", value: 2 },
      { text: "当前需要完成的任务", dimension: "S", value: 1 },
      { text: "未来的发展趋势", dimension: "N", value: 1 },
    ],
  },

  // T vs F (思考 vs 情感)
  {
    id: 5,
    question: "在做重要决定时，你更依靠：",
    answers: [
      { text: "逻辑分析和客观事实", dimension: "T", value: 2 },
      { text: "个人价值观和他人感受", dimension: "F", value: 2 },
      { text: "以往的经验和数据", dimension: "T", value: 1 },
      { text: "直觉和内心的声音", dimension: "F", value: 1 },
    ],
  },
  {
    id: 6,
    question: "在团队冲突中，你更倾向于：",
    answers: [
      { text: "分析问题找出最佳解决方案", dimension: "T", value: 2 },
      { text: "关注每个人的感受和需求", dimension: "F", value: 2 },
      { text: "制定明确的规则和流程", dimension: "T", value: 1 },
      { text: "促进大家的理解和和谐", dimension: "F", value: 1 },
    ],
  },

  // J vs P (判断 vs 知觉)
  {
    id: 7,
    question: "你更喜欢的工作方式是：",
    answers: [
      { text: "制定详细计划并严格执行", dimension: "J", value: 2 },
      { text: "保持灵活，随机应变", dimension: "P", value: 2 },
      { text: "设定明确的截止日期", dimension: "J", value: 1 },
      { text: "在压力下激发创造力", dimension: "P", value: 1 },
    ],
  },
  {
    id: 8,
    question: "面对未完成的任务，你会：",
    answers: [
      { text: "感到焦虑，想尽快完成", dimension: "J", value: 2 },
      { text: "保持冷静，相信会及时完成", dimension: "P", value: 2 },
      { text: "制定计划分步骤完成", dimension: "J", value: 1 },
      { text: "等待灵感或最佳时机", dimension: "P", value: 1 },
    ],
  },

  // 更多题目以增加准确性
  {
    id: 9,
    question: "在团队会议中，你通常：",
    answers: [
      { text: "积极发言分享想法", dimension: "E", value: 2 },
      { text: "仔细倾听别人的发言", dimension: "I", value: 2 },
      { text: "主动提出问题", dimension: "E", value: 1 },
      { text: "思考后再发表意见", dimension: "I", value: 1 },
    ],
  },
  {
    id: 10,
    question: "你更相信：",
    answers: [
      { text: "经过验证的方法和经验", dimension: "S", value: 2 },
      { text: "创新的想法和直觉", dimension: "N", value: 2 },
      { text: "具体的数据和证据", dimension: "S", value: 1 },
      { text: "理论模型和概念", dimension: "N", value: 1 },
    ],
  },
  {
    id: 11,
    question: "当朋友向你求助时，你更倾向于：",
    answers: [
      { text: "给出理性的建议和解决方案", dimension: "T", value: 2 },
      { text: "倾听并给予情感支持", dimension: "F", value: 2 },
      { text: "帮助分析问题的根源", dimension: "T", value: 1 },
      { text: "陪伴并理解他们的感受", dimension: "F", value: 1 },
    ],
  },
  {
    id: 12,
    question: "你的理想假期是：",
    answers: [
      { text: "提前计划好每一天的行程", dimension: "J", value: 2 },
      { text: "随心所欲地探索和发现", dimension: "P", value: 2 },
      { text: "有一些计划但留有灵活性", dimension: "J", value: 1 },
      { text: "完全自由没有任何安排", dimension: "P", value: 1 },
    ],
  },

  // 第二轮题目 - 更深入的测试
  // E vs I 深度测试
  {
    id: 13,
    question: "在工作中，你更享受：",
    answers: [
      { text: "与同事频繁互动和协作", dimension: "E", value: 2 },
      { text: "独立专注地完成任务", dimension: "I", value: 2 },
      { text: "参与团队讨论和头脑风暴", dimension: "E", value: 1 },
      { text: "深入思考和分析问题", dimension: "I", value: 1 },
    ],
  },
  {
    id: 14,
    question: "面对压力时，你倾向于：",
    answers: [
      { text: "与他人交流寻求支持", dimension: "E", value: 2 },
      { text: "独处思考解决方案", dimension: "I", value: 2 },
      { text: "通过运动或社交活动缓解", dimension: "E", value: 1 },
      { text: "通过冥想或阅读放松", dimension: "I", value: 1 },
    ],
  },
  {
    id: 15,
    question: "在新环境中，你通常：",
    answers: [
      { text: "很快融入并结识新朋友", dimension: "E", value: 2 },
      { text: "观察一段时间后再参与", dimension: "I", value: 2 },
      { text: "主动介绍自己给大家", dimension: "E", value: 1 },
      { text: "等待他人主动接近", dimension: "I", value: 1 },
    ],
  },

  // S vs N 深度测试
  {
    id: 16,
    question: "阅读时，你更偏好：",
    answers: [
      { text: "实用的技能指南和说明书", dimension: "S", value: 2 },
      { text: "哲学思辨和创意小说", dimension: "N", value: 2 },
      { text: "历史事件和传记故事", dimension: "S", value: 1 },
      { text: "科幻和奇幻类作品", dimension: "N", value: 1 },
    ],
  },
  {
    id: 17,
    question: "解决问题时，你习惯：",
    answers: [
      { text: "按部就班，使用已知方法", dimension: "S", value: 2 },
      { text: "跳跃思维，寻找创新角度", dimension: "N", value: 2 },
      { text: "参考以往的成功经验", dimension: "S", value: 1 },
      { text: "从全新的视角重新审视", dimension: "N", value: 1 },
    ],
  },
  {
    id: 18,
    question: "你更关注：",
    answers: [
      { text: "当下的具体任务和细节", dimension: "S", value: 2 },
      { text: "长远的愿景和可能性", dimension: "N", value: 2 },
      { text: "实际可行的操作步骤", dimension: "S", value: 1 },
      { text: "概念框架和理论模型", dimension: "N", value: 1 },
    ],
  },

  // T vs F 深度测试
  {
    id: 19,
    question: "评价一个想法时，你首先考虑：",
    answers: [
      { text: "逻辑性和可行性", dimension: "T", value: 2 },
      { text: "对人们的影响和感受", dimension: "F", value: 2 },
      { text: "效率和成本效益", dimension: "T", value: 1 },
      { text: "价值观和道德层面", dimension: "F", value: 1 },
    ],
  },
  {
    id: 20,
    question: "在争论中，你更倾向于：",
    answers: [
      { text: "坚持客观事实和逻辑推理", dimension: "T", value: 2 },
      { text: "考虑所有人的立场和感受", dimension: "F", value: 2 },
      { text: "用数据和证据支持观点", dimension: "T", value: 1 },
      { text: "寻求共识和相互理解", dimension: "F", value: 1 },
    ],
  },
  {
    id: 21,
    question: "做决定时，你更重视：",
    answers: [
      { text: "公正性和一致性", dimension: "T", value: 2 },
      { text: "和谐性和个人价值", dimension: "F", value: 2 },
      { text: "标准化和规范性", dimension: "T", value: 1 },
      { text: "个性化和特殊情况", dimension: "F", value: 1 },
    ],
  },

  // J vs P 深度测试
  {
    id: 22,
    question: "对于变化，你的态度是：",
    answers: [
      { text: "喜欢稳定，抗拒突然变化", dimension: "J", value: 2 },
      { text: "拥抱变化，享受新鲜感", dimension: "P", value: 2 },
      { text: "需要时间适应变化", dimension: "J", value: 1 },
      { text: "视变化为成长机会", dimension: "P", value: 1 },
    ],
  },
  {
    id: 23,
    question: "你的生活节奏更像：",
    answers: [
      { text: "规律有序，按计划进行", dimension: "J", value: 2 },
      { text: "灵活多变，随机应变", dimension: "P", value: 2 },
      { text: "有基本框架但允许调整", dimension: "J", value: 1 },
      { text: "即兴发挥，享受自发性", dimension: "P", value: 1 },
    ],
  },
  {
    id: 24,
    question: "处理多个任务时，你倾向于：",
    answers: [
      { text: "逐个完成，不喜欢中途切换", dimension: "J", value: 2 },
      { text: "同时进行，根据心情切换", dimension: "P", value: 2 },
      { text: "按优先级顺序安排", dimension: "J", value: 1 },
      { text: "保持多个选项的开放性", dimension: "P", value: 1 },
    ],
  },

  // 情境测试题目
  {
    id: 25,
    question: "周末时光，你更愿意：",
    answers: [
      { text: "邀请朋友聚会或外出活动", dimension: "E", value: 2 },
      { text: "在家享受安静的个人时光", dimension: "I", value: 2 },
      { text: "参加社区活动或兴趣小组", dimension: "E", value: 1 },
      { text: "专注于个人爱好或项目", dimension: "I", value: 1 },
    ],
  },
  {
    id: 26,
    question: "学习新技能时，你偏好：",
    answers: [
      { text: "系统学习基础知识和步骤", dimension: "S", value: 2 },
      { text: "直接理解核心概念和原理", dimension: "N", value: 2 },
      { text: "通过实际操作来掌握", dimension: "S", value: 1 },
      { text: "探索创新的应用方式", dimension: "N", value: 1 },
    ],
  },
  {
    id: 27,
    question: "面对批评时，你通常：",
    answers: [
      { text: "分析批评的合理性和改进点", dimension: "T", value: 2 },
      { text: "关注批评者的动机和感受", dimension: "F", value: 2 },
      { text: "客观评估并制定改进计划", dimension: "T", value: 1 },
      { text: "考虑关系和谐，寻求理解", dimension: "F", value: 1 },
    ],
  },
  {
    id: 28,
    question: "对于未来，你更倾向于：",
    answers: [
      { text: "制定明确的长期目标和规划", dimension: "J", value: 2 },
      { text: "保持开放，随机遇而变化", dimension: "P", value: 2 },
      { text: "设定方向但保留调整空间", dimension: "J", value: 1 },
      { text: "享受不确定性带来的可能", dimension: "P", value: 1 },
    ],
  },
];

// 计算MBTI类型的函数
export function calculateMBTI(answers) {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  // 计算每个维度的分数
  answers.forEach((answer, index) => {
    const question = questions[index];
    const selectedAnswer = question.answers[answer];
    scores[selectedAnswer.dimension] += selectedAnswer.value;
  });

  // 确定每个维度的类型和强度
  const dimensions = [
    {
      pair: ["E", "I"],
      winner: scores.E > scores.I ? "E" : "I",
      strength: Math.abs(scores.E - scores.I),
      total: scores.E + scores.I,
      percentage:
        scores.E > scores.I
          ? Math.round((scores.E / (scores.E + scores.I)) * 100)
          : Math.round((scores.I / (scores.E + scores.I)) * 100),
    },
    {
      pair: ["S", "N"],
      winner: scores.S > scores.N ? "S" : "N",
      strength: Math.abs(scores.S - scores.N),
      total: scores.S + scores.N,
      percentage:
        scores.S > scores.N
          ? Math.round((scores.S / (scores.S + scores.N)) * 100)
          : Math.round((scores.N / (scores.S + scores.N)) * 100),
    },
    {
      pair: ["T", "F"],
      winner: scores.T > scores.F ? "T" : "F",
      strength: Math.abs(scores.T - scores.F),
      total: scores.T + scores.F,
      percentage:
        scores.T > scores.F
          ? Math.round((scores.T / (scores.T + scores.F)) * 100)
          : Math.round((scores.F / (scores.T + scores.F)) * 100),
    },
    {
      pair: ["J", "P"],
      winner: scores.J > scores.P ? "J" : "P",
      strength: Math.abs(scores.J - scores.P),
      total: scores.J + scores.P,
      percentage:
        scores.J > scores.P
          ? Math.round((scores.J / (scores.J + scores.P)) * 100)
          : Math.round((scores.P / (scores.J + scores.P)) * 100),
    },
  ];

  // 构建MBTI类型
  const type = dimensions.map((d) => d.winner).join("");

  // 计算总体置信度（基于每个维度的确定性）
  const averageStrength =
    dimensions.reduce((sum, d) => sum + (d.percentage - 50), 0) / 4;
  let confidence = "moderate";

  if (averageStrength >= 25) {
    confidence = "high";
  } else if (averageStrength >= 15) {
    confidence = "moderate";
  } else {
    confidence = "low";
  }

  // 生成维度强度描述
  const dimensionDetails = dimensions.map((d, index) => {
    const dimensionNames = [
      { name: "能量来源", labels: ["外向", "内向"] },
      { name: "信息收集", labels: ["感知", "直觉"] },
      { name: "决策方式", labels: ["思考", "情感"] },
      { name: "生活方式", labels: ["判断", "知觉"] },
    ];

    const current = dimensionNames[index];
    const isFirst = d.winner === d.pair[0];

    return {
      name: current.name,
      winner: isFirst ? current.labels[0] : current.labels[1],
      winnerCode: d.winner,
      percentage: d.percentage,
      strength:
        d.percentage >= 70
          ? "strong"
          : d.percentage >= 60
          ? "moderate"
          : "slight",
    };
  });

  return {
    type,
    scores,
    personality: personalityTypes[type],
    confidence,
    dimensions: dimensionDetails,
    averageStrength: Math.round(averageStrength),
  };
}
