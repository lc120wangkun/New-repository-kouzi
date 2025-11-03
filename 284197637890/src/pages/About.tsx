import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

function Section({ 
  title, 
  icon, 
  children 
}: { 
  title: string; 
  icon: string; 
  children: React.ReactNode 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold flex items-center">
        <span className="mr-2 text-xl">{icon}</span> {title}
      </h2>
      <div className="pl-8">
        {children}
      </div>
    </motion.div>
  );
}

export default function About() {
  const { isDark } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-12">关于我</h1>
      
      <div className="space-y-16">
        <Section title="起点" icon="🚶‍♂️">
          <p className="mb-4">
            1989年，我出生在一个普通家庭。成长的环境塑造了我务实、坚韧的性格底色。从小对世界充满好奇，喜欢探索事物背后的规律。
          </p>
          <p className="mb-4">
            2007年，我考入西安建筑科技大学，开启了系统的工程学习。这段经历培养了我严谨的逻辑思维和解决问题的能力，为后来的职业发展奠定了基础。
          </p>
          <blockquote className={`mt-6 text-sm italic border-l-2 pl-3 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
            "成长是一场不断拆解幻觉的旅程。"
          </blockquote>
        </Section>
        
        <Section title="转折" icon="🔄">
          <p className="mb-4">
            毕业后，我成为了一名工程师，但内心始终有一种探索更多可能性的冲动。2014年，我决定转型，投身教育创业，成为一名建造师讲师。这段经历让我学会了如何将复杂的知识简单化，也让我开始关注人的成长与发展。
          </p>
          <p className="mb-4">
            2018年，我再次转型，加入葡萄创投，成为一名一级市场融资顾问。在这个过程中，我接触了大量的创业者和投资人，深入了解了商业世界的运作逻辑。
          </p>
          <p className="mb-4">
            2020年，是我人生的重要转折点。在经历了家庭的重大变化后，我开始深度反思生命的意义，踏上了觉察与内在成长的道路。
          </p>
          <blockquote className={`mt-6 text-sm italic border-l-2 pl-3 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
            "当我停止追求安全感，反而开始自由。"
          </blockquote>
        </Section>
        
        <Section title="当下与愿景" icon="🌟">
          <p className="mb-4">
            2023年，我成为了一名父亲。这个新的身份让我对生命有了更深的理解和责任感。同年，我开始探索AI与人类认知的融合，这成为了我新的研究方向。
          </p>
          <p className="mb-4">
            现在，我是一名企业教练和认知成长顾问，致力于帮助企业家和高管突破认知局限，实现个人与企业的共同成长。我相信，在AI时代，人类的觉察能力和创造力将变得更加重要。
          </p>
          <p className="mb-4">
            我的愿景是创建一个"AI文明空间"，让更多人能够在这个快速变化的时代，保持内心的平静与觉察，同时充分利用科技的力量，实现更高维度的成长。
          </p>
          <blockquote className={`mt-6 text-sm italic border-l-2 pl-3 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
            "以觉察见世界，以行动证智慧。"
          </blockquote>
        </Section>
      </div>
    </motion.div>
  );
}