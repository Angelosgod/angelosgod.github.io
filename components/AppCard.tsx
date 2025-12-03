import React from 'react';
import { AppInfo } from '../types';
import { Download, CheckCircle, Apple, Smartphone } from 'lucide-react';

interface AppCardProps {
  app: AppInfo;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-brand-50 group">
         <img 
            src={app.screenshotUrl} 
            alt={`${app.name} preview`} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
             <span className="bg-brand-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {app.category}
             </span>
         </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
                <img 
                    src={app.iconUrl} 
                    alt={`${app.name} icon`} 
                    className="w-12 h-12 rounded-xl shadow-sm" 
                />
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                    <p className="text-sm text-brand-600 font-medium">{app.tagline}</p>
                </div>
            </div>
        </div>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">
          {app.description}
        </p>

        <div className="space-y-3 mb-6">
            {app.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                </div>
            ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-auto">
            {app.downloadUrl.ios && (
                <a href={app.downloadUrl.ios} className="flex items-center justify-center space-x-2 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-xs font-medium">
                    <Apple className="w-4 h-4" />
                    <span>App Store</span>
                </a>
            )}
            {app.downloadUrl.android && (
                <a href={app.downloadUrl.android} className="flex items-center justify-center space-x-2 bg-brand-600 text-white py-2 px-4 rounded-lg hover:bg-brand-700 transition-colors text-xs font-medium">
                    <Smartphone className="w-4 h-4" />
                    <span>Android</span>
                </a>
            )}
            {!app.downloadUrl.ios && !app.downloadUrl.android && (
                 <button disabled className="col-span-2 flex items-center justify-center space-x-2 bg-gray-100 text-gray-400 py-2 px-4 rounded-lg cursor-not-allowed text-xs font-medium">
                    <span>敬请期待</span>
                </button>
            )}
        </div>
      </div>
    </div>
  );
};
