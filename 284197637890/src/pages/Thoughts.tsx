import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

// 定义文章类型
interface Essay {
  id: number;
  title: string;
  topic: 'buddhism' | 'tech' | 'investment' | 'coaching';
  date: string;
  excerpt: string;
  tags: string[];
}

// 模拟文章数据
const essays: Essay[] = [
  {
    id: 1,
    title: "觉察的力量：在喧嚣中保持内心的平静",
    topic: "buddhism",
    date: "2025-10-15",
    excerpt: "在信息爆炸的时代，我们如何通过觉察的练习，保持内心的平静与清明？本文分享我的实践与体会。",
    tags: ["觉察", "冥想", "内心平静"]
  },
  {
    id: 2,
    title: "AI时代的认知革命：人类如何保持独特性",
    topic: "tech",
    date: "2025-09-28",
    excerpt: "随着AI技术的快速发展，人类的认知模式正在发生深刻变化。我们需要重新思考：什么是人类独特的价值？",
    tags: ["AI", "认知", "未来"]
  },
  {
    id: 3,
    title: "长期主义：在短视的世界中做长期正确的事",
    topic: "investment",
    date: "2025-09-10",
    excerpt: "长期主义不仅仅是一种投资策略，更是一种生活哲学。本文探讨如何在短视的世界中坚持长期主义。",
    tags: ["长期主义", "投资", "耐心"]
  },
  {
    id: 4,
    title: "认知突围：突破思维定式的四种方法",
    topic: "coaching",
    date: "2025-08-25",
    excerpt: "我们的思维定式常常限制了我们的可能性。本文分享四种实用方法，帮助你突破思维的局限。",
    tags: ["认知成长", "思维定式", "突破"]
  },
  {
    id: 5,
    title: "正念在商业中的应用：提升决策质量的关键",
    topic: "buddhism",
    date: "2025-08-10",
    excerpt: "正念不仅仅是个人修行，也是提升商业决策质量的重要工具。如何将正念融入日常的商业实践？",
    tags: ["正念", "商业决策", "领导力"]
  },
  {
    id: 6,
    title: "大模型时代的学习革命：如何高效学习",
    topic: "tech",
    date: "2025-07-22",
    excerpt: "大模型正在改变我们获取和处理信息的方式。在这个新时代，我们需要重新思考学习的本质和方法。",
    tags: ["AI", "学习", "认知"]
  }
];

// 主题配置
const topics = [
  { key: "all", name: "全部", icon: "📚" },
  { key: "buddhism", name: "佛学与觉察", icon: "🧘" },
  { key: "tech", name: "科技与AI", icon: "🤖" },
  { key: "investment", name: "投资与长期主义", icon: "💰" },
  { key: "coaching", name: "教练与认知成长", icon: "🧩" }
];

export default function Thoughts() {
  const { isDark } = useTheme();
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  
  // 根据选择的主题过滤文章
  const filteredEssays = selectedTopic === "all" 
    ? essays 
    : essays.filter(essay => essay.topic === selectedTopic);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-8">思考</h1>
      
      {/* 主题选择器 */}
      <div className="mb-12 overflow-x-auto pb-2">
        <div className="flex space-x-2 min-w-max">
          {topics.map((topic) => (
            <button
              key={topic.key}
              onClick={() => setSelectedTopic(topic.key)}
              className={`px-4 py-2 rounded-full text-sm flex items-center transition-all ${
                selectedTopic === topic.key 
                  ? 'bg-black text-white dark:bg-white dark:text-black' 
                  : isDark 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{topic.icon}</span>
              {topic.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* 文章列表 */}
      <div className="space-y-8">
        {filteredEssays.map((essay) => (
          <motion.div
            key={essay.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-6 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3 text-xs opacity-70">
              <span>{essay.date}</span>
              <span>•</span>
              <span>
                {topics.find(t => t.key === essay.topic)?.icon} 
                {topics.find(t => t.key === essay.topic)?.name}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3">{essay.title}</h3>
            <p className="mb-4 opacity-80">{essay.excerpt}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {essay.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className={`px-2 py-1 rounded text-xs ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* 订阅区域 */}
      <div className={`mt-16 p-8 rounded-lg text-center ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <h3 className="text-xl font-medium mb-4">订阅更新</h3>
        <p className="mb-6 opacity-80">获取我的最新思考与洞见</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="输入你的邮箱"
            className={`flex-1 px-4 py-3 rounded-md border ${
              isDark 
                ? 'bg-gray-700 border-gray-600 placeholder-gray-500' 
                : 'bg-white border-gray-300 placeholder-gray-400'
            } focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white`}
          />
          <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            订阅
          </button>
        </div>
        <p className="mt-4 text-xs opacity-60">我们尊重你的隐私，不会向第三方分享你的信息</p>
      </div>
    </motion.div>
  );
}