import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

// 定义时间线条目类型
interface TimelineItem {
  year: number;
  title: string;
  description: string;
  reflection: string;
}

// 模拟时间线数据
const timelineData: TimelineItem[] = [
  {
    year: 1989,
    title: "出生",
    description: "在一个普通家庭出生，成长环境塑造了务实、坚韧的性格底色。",
    reflection: "生命的起点，蕴含着无限可能。"
  },
  {
    year: 2007,
    title: "西安建筑科技大学 → 工程师",
    description: "考入西安建筑科技大学，开启系统的工程学习，培养了严谨的逻辑思维和解决问题的能力。",
    reflection: "知识的积累，为未来的探索奠定基础。"
  },
  {
    year: 2014,
    title: "教育创业 → 建造师讲师",
    description: "决定转型，投身教育创业，成为一名建造师讲师，学会了如何将复杂的知识简单化。",
    reflection: "第一次突破舒适区，发现了新的可能性。"
  },
  {
    year: 2018,
    title: "一级市场融资顾问 → 葡萄创投",
    description: "再次转型，加入葡萄创投，成为一名一级市场融资顾问，接触了大量创业者和投资人。",
    reflection: "商业世界的复杂性，让我对价值创造有了更深的理解。"
  },
  {
    year: 2020,
    title: "家庭与觉察转折期",
    description: "经历家庭重大变化后，开始深度反思生命的意义，踏上了觉察与内在成长的道路。",
    reflection: "当我停止追求安全感，反而开始自由。"
  },
  {
    year: 2023,
    title: "成为父亲 → 探索AI与觉醒",
    description: "成为一名父亲，对生命有了更深的理解和责任感，同时开始探索AI与人类认知的融合。",
    reflection: "新的身份，带来新的视角与责任。"
  },
  {
    year: 2025,
    title: "策划'AI文明空间 / 俱乐部'计划",
    description: "开始策划'AI文明空间'计划，希望创建一个让更多人能够在AI时代保持内心平静与觉察的平台。",
    reflection: "以觉察见世界，以行动证智慧。"
  }
];

export default function Timeline() {
  const { isDark } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-12">时间线</h1>
      
      <div className="relative">
        {/* 中心线 */}
        <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        } transform md:translate-x-[-0.5px]`}></div>
        
        {/* 时间线条目 */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* 年份标签 */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className={`text-2xl font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.year}
                </span>
              </div>
              
              {/* 中心圆点 */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-black transform -translate-x-1/2 mt-2.5 z-10"></div>
              
              {/* 内容 */}
              <div className={`md:w-1/2 mt-4 md:mt-0 ${
                index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
              }`}>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-4 opacity-80">{item.description}</p>
                <blockquote className={`inline-block text-sm italic border-l-2 pl-3 py-1 ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                } ${index % 2 === 1 ? 'ml-auto border-l-0 border-r-2 pl-0 pr-3' : ''}`}>
                  "{item.reflection}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* 未来展望 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`mt-16 p-8 rounded-lg text-center ${
          isDark ? 'bg-gray-800' : 'bg-gray-50'
        }`}
      >
        <h3 className="text-xl font-medium mb-4">未来</h3>
        <p className="opacity-80">
          生命是一场持续的探索与成长之旅。我期待着未来更多的可能性，
          继续在觉察中行动，在行动中觉察，创造有意义的人生体验。
        </p>
      </motion.div>
    </motion.div>
  );
}