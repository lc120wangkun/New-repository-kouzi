import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

export default function Footer() {
  const { isDark } = useTheme();
  
  return (
    <footer className={`mt-auto py-12 px-4 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} border-t`}>
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} 王昆</p>
            <p className="text-xs mt-1 opacity-70">以觉察见世界，以行动证智慧</p>
          </div>
          <div className="flex space-x-8">
            <Link to="/about" className="text-xs hover:underline">关于我</Link>
            <Link to="/thoughts" className="text-xs hover:underline">思考</Link>
            <Link to="/timeline" className="text-xs hover:underline">时间线</Link>
            <Link to="/projects" className="text-xs hover:underline">项目</Link>
            <Link to="/contact" className="text-xs hover:underline">联系</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}