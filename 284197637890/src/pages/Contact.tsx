import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

// 联系方式项组件
function ContactItem({ 
  icon, 
  title, 
  content, 
  link 
}: { 
  icon: string; 
  title: string; 
  content: string; 
  link?: string; 
}) {
  return (
    <div className="flex items-center">
      <span className="text-xl mr-4">{icon}</span>
      <div>
        <h3 className="text-sm opacity-70">{title}</h3>
        {link ? (
          <a 
            href={link} 
            className="text-base font-medium hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          <p className="text-base">{content}</p>
        )}
      </div>
    </div>
  );
}

// 社交媒体链接组件
function SocialLink({ icon, label }: { icon: string; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className={`p-3 rounded-full transition-colors hover:bg-black hover:text-white ${
        icon === 'fa-weixin' ? 'text-green-500' : 
        icon === 'fa-weibo' ? 'text-red-500' : 
        icon === 'fa-instagram' ? 'text-pink-500' : 
        'text-red-600'
      }`}
    >
      <i className={`fab ${icon}`}></i>
    </a>
  );
}

export default function Contact() {
  const { isDark } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-12">联系</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-8 rounded-lg h-full ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <h2 className="text-xl font-semibold mb-6">联系方式</h2>
            
            <div className="space-y-6">
              <ContactItem 
                icon="📧" 
                title="邮箱" 
                content="wangkun@domain.com" 
                link="mailto:wangkun@domain.com" 
              />
              
              <ContactItem 
                icon="📍" 
                title="地址" 
                content="深圳·宝安" 
              />
              
              <div className="pt-4 border-t border-gray-700 dark:border-gray-700">
                <h3 className="text-base font-medium mb-4">社交媒体</h3>
                <div className="flex space-x-4">
                  <SocialLink icon="fa-weixin" label="微信" />
                  <SocialLink icon="fa-weibo" label="微博" />
                  <SocialLink icon="fa-instagram" label="小红书" />
                  <SocialLink icon="fa-youtube" label="视频号" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`p-8 rounded-lg ${
            isDark ? 'bg-gray-800' : 'bg-gray-50'
          }`}
        >
          <h2 className="text-xl font-semibold mb-6">给我留言</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                姓名
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-3 rounded-md border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 placeholder-gray-500' 
                    : 'bg-white border-gray-300 placeholder-gray-400'
                } focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white`}
                placeholder="请输入你的姓名"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                邮箱
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-3 rounded-md border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 placeholder-gray-500' 
                    : 'bg-white border-gray-300 placeholder-gray-400'
                } focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white`}
                placeholder="请输入你的邮箱"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                留言内容
              </label>
              <textarea
                id="message"
                rows={5}
                className={`w-full px-4 py-3 rounded-md border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 placeholder-gray-500' 
                    : 'bg-white border-gray-300 placeholder-gray-400'
                } focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white`}
                placeholder="请输入你想对我说的话"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className={`w-full px-6 py-3 rounded-md ${
                isDark 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              } transition-colors`}
            >
              发送留言
            </button>
          </form>
        </motion.div>
      </div>
      
      {/* 工作咨询 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className={`mt-12 p-8 rounded-lg text-center ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
        } border`}
      >
        <h3 className="text-xl font-medium mb-2">工作咨询</h3>
        <p className="mb-4 opacity-80">
          如果你正在寻找企业教练、投资顾问或认知成长顾问，
          欢迎通过以上方式联系我，探讨我们如何一起合作。
        </p>
      </motion.div>
    </motion.div>
  );
}