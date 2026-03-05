import { Link } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4">HamR Developer</h3>
            <p className="text-gray-400 mb-4">
              构建下一代家庭智能助理生态系统
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hamr-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/hamr_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:dev@hamr.store"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">开发资源</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/docs" className="text-gray-400 hover:text-white transition-colors">
                  API 文档
                </Link>
              </li>
              <li>
                <Link to="/sdk" className="text-gray-400 hover:text-white transition-colors">
                  SDK 下载
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.hamr.top"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  技术文档
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">社区</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors">
                  贡献指南
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/hamr-hub/hamr/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  问题反馈
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/hamr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} HamR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
