import React, { useEffect } from 'react';
import { LegalDocType } from '../types';
import { Shield, FileText } from 'lucide-react';

interface LegalDocProps {
  type: LegalDocType;
}

export const LegalDoc: React.FC<LegalDocProps> = ({ type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? '隐私政策' : '用户协议';
  const lastUpdated = '2023年10月27日';
  const Icon = isPrivacy ? Shield : FileText;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
        
        {/* Header */}
        <div className="border-b border-gray-100 pb-8 mb-8">
            <div className="flex items-center space-x-3 text-brand-600 mb-4">
                <Icon className="w-8 h-8" />
                <span className="font-semibold tracking-wider uppercase text-sm">Legal Document</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-gray-500">最后更新日期：{lastUpdated}</p>
        </div>

        {/* Content Area - Simulating Long Text */}
        <div className="prose prose-blue max-w-none text-gray-600">
            {isPrivacy ? (
                <>
                    <h3>1. 信息收集</h3>
                    <p>
                        我们非常重视您的隐私。在使用我们的应用程序时，我们可能会收集某些信息以提供更好的服务。这包括但不限于：设备信息（如型号、操作系统版本）、使用日志以及您主动提供的反馈信息。
                    </p>
                    <p>
                        我们<strong>不会</strong>在未经您明确同意的情况下收集您的个人敏感信息，如通讯录、短信内容或精确地理位置。
                    </p>

                    <h3>2. 信息使用</h3>
                    <p>
                        收集的信息将主要用于以下目的：
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>改进应用程序的功能和性能。</li>
                            <li>修复崩溃和技术故障。</li>
                            <li>分析用户使用习惯以优化用户体验。</li>
                        </ul>
                    </p>

                    <h3>3. 信息共享</h3>
                    <p>
                        我们承诺不会向任何第三方出售您的个人信息。只有在法律要求或为了保护我们的合法权益时，我们才可能披露必要的信息。
                    </p>

                    <h3>4. 数据安全</h3>
                    <p>
                        我们采取行业标准的安全措施来保护您的数据免受未经授权的访问、修改或泄露。
                    </p>
                    
                    <h3>5. 联系我们</h3>
                    <p>如果您对本隐私政策有任何疑问，请通过 support@example.com 联系我们。</p>
                </>
            ) : (
                <>
                    <h3>1. 接受条款</h3>
                    <p>
                        通过下载、安装或使用我们的应用程序，即表示您同意遵守本用户协议的所有条款。如果您不同意这些条款，请勿使用我们的服务。
                    </p>

                    <h3>2. 许可授权</h3>
                    <p>
                        我们授予您一项个人的、不可转让的、非独占的许可，允许您在您的移动设备上使用我们的应用程序。您不得对应用程序进行反向工程、反编译或试图提取源代码。
                    </p>

                    <h3>3. 用户行为规范</h3>
                    <p>
                        您同意在使用服务时遵守所有适用的法律法规。严禁利用本应用进行任何非法活动，包括但不限于传播恶意软件、侵犯他人知识产权或发布违法内容。
                    </p>

                    <h3>4. 免责声明</h3>
                    <p>
                        我们的服务按"原样"提供，不包含任何明示或暗示的保证。对于因使用本应用而导致的任何直接或间接损失，我们不承担赔偿责任。
                    </p>

                    <h3>5. 协议修改</h3>
                    <p>
                        我们保留随时修改本协议的权利。修改后的条款一旦公布即生效。继续使用服务即视为您接受修改后的协议。
                    </p>
                </>
            )}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-400">
                如果您对上述内容有疑问，请随时联系我们的法务团队。
            </p>
        </div>
      </div>
    </div>
  );
};
