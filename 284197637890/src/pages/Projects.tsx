import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

// 定义项目类型
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  icon: string;
}

// 模拟项目数据
const projects: Project[] = [
  {
    id: 1,
    title: "壹号湾社区",
    subtitle: "企业家闭门会",
    description: "为企业家和高管提供深度交流与共同成长的私密空间，通过主题研讨、案例分析和经验分享，帮助成员突破认知局限，解决企业发展中的实际问题。",
    status: "进行中",
    icon: "🌊"
  },
  {
    id: 2,
    title: "AI前哨俱乐部",
    subtitle: "AI与认知成长空间",
    description: "探索AI技术与人类认知的融合，帮助会员了解AI发展趋势，掌握AI工具的使用方法，同时保持人类独特的创造力和觉察能力。",
    status: "发展中",
    icon: "🤖"
  },
  {
    id: 3,
    title: "文明空间 / ONEVERSE",
    subtitle: "文化与心灵共修体",
    description: "创建一个融合东方智慧与现代文明的共修平台，通过线上线下结合的方式，帮助更多人在快速变化的时代保持内心的平静与觉察，实现身心的全面成长。",
    status: "策划阶段",
    icon: "🌍"
  }
];

export default function Projects() {
  const { isDark } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-8">项目</h1>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-3xl mr-3">{project.icon}</span>
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                </div>
                <h3 className="text-lg opacity-70 mb-4">{project.subtitle}</h3>
                <p className="mb-6 leading-relaxed">{project.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                isDark 
                  ? 'bg-gray-700 text-green-400' 
                  : 'bg-gray-200 text-green-700'
              }`}>
                {project.status}
              </span>
            </div>
            
            {/* 项目进度条 */}
            <div className="mt-8">
              <div className={`h-1 w-full rounded-full overflow-hidden ${
                isDark ? 'bg-gray-700' : 'bg-gray-300'
              }`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ 
                    width: index === 0 ? '80%' : index === 1 ? '45%' : '20%'
                  }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-full bg-black dark:bg-white"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* 合作邀请 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`mt-16 p-8 rounded-lg text-center ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
        } border`}
      >
        <h3 className="text-xl font-medium mb-4">合作邀请</h3>
        <p className="mb-6 opacity-80">
          如果你对以上项目感兴趣，或者有其他合作想法，欢迎联系我，
          让我们一起探索更多可能性。
        </p>
        <a 
          href="/contact" 
          className={`inline-block px-6 py-3 rounded-md ${
            isDark 
              ? 'bg-white text-black hover:bg-gray-200' 
              : 'bg-black text-white hover:bg-gray-800'
          } transition-colors`}
        >
          联系我
        </a>
      </motion.div>
    </motion.div>
  );
}