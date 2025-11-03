import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      to={href}
      className={cn(
        'text-sm hover:underline transition-all relative group',
        'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full'
      )}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <nav className={`sticky top-0 z-50 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'} border-b py-6 px-4 backdrop-blur-md bg-opacity-90`}>
      <div className="container mx-auto max-w-4xl flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-lg font-medium mr-8">
            王昆
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/about">关于我</NavLink>
            <NavLink href="/thoughts">思考</NavLink>
            <NavLink href="/timeline">时间线</NavLink>
            <NavLink href="/projects">项目</NavLink>
            <NavLink href="/contact">联系</NavLink>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${
            isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
          }`}
          aria-label={isDark ? '切换到亮色模式' : '切换到暗色模式'}
        >
          {isDark ? (
            <i className="fas fa-sun text-yellow-300"></i>
          ) : (
            <i className="fas fa-moon text-gray-700"></i>
          )}
        </button>
      </div>
    </nav>
  );
}