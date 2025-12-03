import React from 'react';
import { AppCard } from '../components/AppCard';
import { AppInfo } from '../types';

// Mock Data - In a real app, this could come from an API or config file
const apps: AppInfo[] = [
  {
    id: '1',
    name: '每日禅意',
    tagline: '寻找内心的平静',
    description: '一款专注于冥想和专注力的应用，帮助您在繁忙的日常生活中找到片刻的宁静。提供白噪音、引导式冥想和呼吸练习。',
    category: '健康与健身',
    iconUrl: 'https://picsum.photos/seed/zenicon/200/200',
    screenshotUrl: 'https://picsum.photos/seed/zenui/800/600',
    downloadUrl: { ios: '#', android: '#' },
    features: ['50+ 种自然白噪音', '每日心情记录日记', '番茄工作法专注计时器']
  },
  {
    id: '2',
    name: 'AI 写作助手',
    tagline: '您的智能创作伙伴',
    description: '利用先进的人工智能技术，帮助您快速生成文案、润色邮件和激发创作灵感。支持多语言翻译和风格调整。',
    category: '效率工具',
    iconUrl: 'https://picsum.photos/seed/aiicon/200/200',
    screenshotUrl: 'https://picsum.photos/seed/aiui/800/600',
    downloadUrl: { ios: '#' },
    features: ['智能文案生成', '实时语法纠错', '多语言即时翻译']
  },
  {
    id: '3',
    name: '旅行足迹',
    tagline: '记录世界的每一个角落',
    description: '自动生成您的旅行地图，记录您去过的每一个城市。支持照片地理位置自动标记，生成精美的旅行相册。',
    category: '旅游出行',
    iconUrl: 'https://picsum.photos/seed/travelicon/200/200',
    screenshotUrl: 'https://picsum.photos/seed/travelui/800/600',
    downloadUrl: { android: '#' },
    features: ['3D 旅行轨迹回放', '智能相册整理', '离线地图支持']
  }
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                探索创新的<span className="text-brand-600">移动体验</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                我们致力于开发简单、好用、富有设计感的移动应用，旨在提升您的生活品质与工作效率。
            </p>
        </div>
      </div>

      {/* App Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center mb-8">
            <div className="h-8 w-1 bg-brand-600 rounded-full mr-3"></div>
            <h2 className="text-2xl font-bold text-gray-900">精选应用</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};
