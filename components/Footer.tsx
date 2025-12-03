import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AppStudio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              专注于打造高品质移动应用，为用户提供便捷、高效的数字生活体验。
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">首页应用</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">隐私政策</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">用户协议</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">联系我们</h4>
            <p className="text-gray-400 text-sm">support@example.com</p>
            <p className="text-gray-400 text-sm mt-2">© {currentYear} AppStudio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
