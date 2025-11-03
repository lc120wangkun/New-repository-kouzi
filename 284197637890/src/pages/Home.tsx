import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

function NavButton({ href, children }: { href: string; children: React.ReactNode }) {
  const { isDark } = useTheme();
  
  return (
    <Link
      to={href}
      className={`inline-block px-6 py-3 rounded-md text-sm font-medium transition-all border ${
        isDark 
          ? 'border-gray-700 hover:bg-gray-800 hover:border-gray-600' 
          : 'border-gray-300 hover:bg-gray-100 hover:border-gray-400'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  const { isDark } = useTheme();
  
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">王昆</h1>
          <p className="text-xl md:text-2xl font-light opacity-80 mb-6">
            企业教练 × 投资顾问 × 思想实践者
          </p>
          <blockquote className={`text-xl md:text-2xl italic border-l-4 pl-4 py-2 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
            "以觉察见世界，以行动证智慧。"
          </blockquote>
        </div>
        
        <div className="mt-12 space-y-6">
          <p className="text-base md:text-lg leading-relaxed">
            出生于1989年，毕业于西安建筑科技大学，职业经历从工程师转型至教育创业者，再到一级市场融资顾问，最终成为企业教练与认知成长顾问。
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            当前致力于探索AI与人类认知融合、文明空间建设以及长期主义投资等方向，希望通过觉察与行动，帮助更多人实现认知突破与成长。
          </p>
        </div>
        
        <div className="mt-12">
          <h2 className="text-lg font-medium mb-4">导航</h2>
          <div className="flex flex-wrap gap-4">
            <NavButton href="/about">关于我</NavButton>
            <NavButton href="/thoughts">思考</NavButton>
            <NavButton href="/timeline">时间线</NavButton>
            <NavButton href="/projects">项目</NavButton>
            <NavButton href="/contact">联系</NavButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}