import { Link, useLocation } from 'react-router-dom';
import { Code2, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: '首页' },
    { to: '/projects', label: '开源项目' },
    { to: '/docs', label: 'API 文档' },
    { to: '/sdk', label: 'SDK' },
    { to: '/resources', label: '资源' },
    { to: '/community', label: '社区' },
  ];

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-primary-500" />
            <span className="text-xl font-bold text-white">HamR Developer</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link transition-colors duration-200 ${
                  isActive(link.to) ? 'text-primary-400 font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/hamr-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive(link.to)
                    ? 'bg-primary-500/20 text-primary-400 font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/hamr-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
