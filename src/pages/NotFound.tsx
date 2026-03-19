import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-8xl font-bold text-primary-500 mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">页面不存在</h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            你访问的页面可能已被移除、改名，或暂时不可用。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary flex items-center justify-center gap-2">
              <Home className="w-4 h-4" />
              返回首页
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              返回上页
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
