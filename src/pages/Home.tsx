import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Zap, Github, BookOpen, Play, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { value: '5,600+', label: 'GitHub Stars' },
    { value: '1,200+', label: '注册开发者' },
    { value: '200+', label: '开源贡献者' },
    { value: '8', label: '开源项目' },
  ];

  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: '3 步快速开始',
      description: '从零到部署只需 3 个命令，10 分钟完成集成',
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: '多语言 SDK',
      description: '支持 TypeScript、Rust、Python、Go 等主流语言',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: '活跃社区',
      description: '1000+ 开发者，200+ 开源贡献者，丰富的生态插件',
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: '生产就绪',
      description: '经过严格测试，支持 99.9% SLA，可扩展架构',
    },
  ];

  const codeExample = `// 安装 HamR SDK
npm install @hamr/core

// 初始化客户端
import { HamRClient } from '@hamr/core';

const client = new HamRClient({
  apiKey: process.env.HAMR_API_KEY,
});

// 调用智能助理
const response = await client.chat({
  message: "帮我打开客厅的灯",
  context: { room: "living_room" }
});

console.log(response.text);
// 输出: "好的，已为您打开客厅的灯"`;

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            构建下一代
            <br />
            <span className="text-primary-500">家庭智能助理</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            开源、隐私优先、可扩展。从智能家居控制到个人助理，
            HamR 为开发者提供完整的技术栈和生态支持。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/docs" className="btn-primary">
              查看 API 文档
            </Link>
            <a
              href="https://github.com/hamr-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              浏览 GitHub
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-primary-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">为什么选择 HamR？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors"
              >
                <div className="text-primary-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">快速开始</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="code-block"
          >
            <pre className="text-gray-300 leading-relaxed">{codeExample}</pre>
          </motion.div>
          <div className="text-center mt-8">
            <Link to="/docs" className="text-primary-500 hover:text-primary-400 font-medium">
              查看完整文档 →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">加入 HamR 开发者社区</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            与全球开发者一起构建智能家居的未来。贡献代码、分享经验、获得支持。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/community" className="btn-primary">
              查看贡献指南
            </Link>
            <a
              href="https://discord.gg/hamr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              加入 Discord
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-300">生态导航</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <BookOpen className="w-5 h-5" />, label: '技术文档', sub: 'docs.hamr.top', href: 'https://docs.hamr.top' },
              { icon: <Zap className="w-5 h-5" />, label: 'API 服务', sub: 'api.hamr.top', href: 'https://api.hamr.top' },
              { icon: <Play className="w-5 h-5" />, label: '在线演示', sub: 'demo.hamr.top', href: 'https://demo.hamr.top' },
              { icon: <Activity className="w-5 h-5" />, label: '服务状态', sub: 'status.hamr.top', href: 'https://status.hamr.top' },
              { icon: <Code2 className="w-5 h-5" />, label: '开源项目', sub: 'hamr.top/projects', href: '/projects', internal: true },
              { icon: <Rocket className="w-5 h-5" />, label: '部署指南', sub: 'deploy.hamr.top', href: 'https://deploy.hamr.top' },
              { icon: <Users className="w-5 h-5" />, label: '社区', sub: 'hamr.top/community', href: '/community', internal: true },
              { icon: <Github className="w-5 h-5" />, label: 'GitHub', sub: 'github.com/hamr-hub', href: 'https://github.com/hamr-hub' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                viewport={{ once: true }}
              >
                {item.internal ? (
                  <Link
                    to={item.href}
                    className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-primary-500/50 transition-all text-center"
                  >
                    <div className="text-primary-400 mb-2">{item.icon}</div>
                    <div className="font-medium text-sm text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.sub}</div>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-primary-500/50 transition-all text-center"
                  >
                    <div className="text-primary-400 mb-2">{item.icon}</div>
                    <div className="font-medium text-sm text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.sub}</div>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
