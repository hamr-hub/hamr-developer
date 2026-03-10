import { motion } from 'framer-motion';
import { BookOpen, Zap, Play, Server, Activity, Github, Key, Terminal, FileText, Package } from 'lucide-react';

const resources = [
  {
    category: '技术文档',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
    items: [
      {
        title: '技术文档站',
        description: '架构设计、API 参考、部署指南、最佳实践',
        url: 'https://docs.hamr.top',
        label: 'docs.hamr.top',
        icon: <BookOpen className="w-5 h-5" />,
      },
      {
        title: '部署指南',
        description: 'Docker 部署、K8s 编排、故障排查手册',
        url: 'https://deploy.hamr.top',
        label: 'deploy.hamr.top',
        icon: <Server className="w-5 h-5" />,
      },
    ],
  },
  {
    category: 'API 与集成',
    icon: <Zap className="w-6 h-6" />,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10 border-yellow-400/20',
    items: [
      {
        title: 'API 服务',
        description: 'RESTful API 网关，Chat / Devices / Automation 端点',
        url: 'https://api.hamr.top',
        label: 'api.hamr.top',
        icon: <Zap className="w-5 h-5" />,
      },
      {
        title: '在线演示',
        description: '免注册体验 HamR API，内置示例数据',
        url: 'https://demo.hamr.top',
        label: 'demo.hamr.top',
        icon: <Play className="w-5 h-5" />,
      },
    ],
  },
  {
    category: '运维与监控',
    icon: <Activity className="w-6 h-6" />,
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
    items: [
      {
        title: '服务状态',
        description: '实时服务健康状态、SLA 报告、历史可用性',
        url: 'https://status.hamr.top',
        label: 'status.hamr.top',
        icon: <Activity className="w-5 h-5" />,
      },
    ],
  },
  {
    category: '开发者工具',
    icon: <Terminal className="w-6 h-6" />,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
    items: [
      {
        title: 'GitHub 组织',
        description: '所有开源项目源码、Issue 追踪、PR 审查',
        url: 'https://github.com/hamr-hub',
        label: 'github.com/hamr-hub',
        icon: <Github className="w-5 h-5" />,
      },
      {
        title: 'API Key 管理',
        description: '申请、管理、轮换你的 API Key',
        url: 'https://dashboard.hamr.top',
        label: 'dashboard.hamr.top',
        icon: <Key className="w-5 h-5" />,
      },
    ],
  },
];

const downloads = [
  {
    title: 'TypeScript SDK',
    command: 'npm install @hamr/core',
    icon: <Package className="w-5 h-5" />,
    docs: 'https://docs.hamr.top/sdk/typescript',
  },
  {
    title: 'Python SDK',
    command: 'pip install hamr-python',
    icon: <Package className="w-5 h-5" />,
    docs: 'https://docs.hamr.top/sdk/python',
  },
  {
    title: 'Go SDK',
    command: 'go get github.com/hamr-hub/hamr-go',
    icon: <Package className="w-5 h-5" />,
    docs: 'https://docs.hamr.top/sdk/go',
  },
  {
    title: 'HamR CLI',
    command: 'cargo install hamr-cli',
    icon: <Terminal className="w-5 h-5" />,
    docs: 'https://docs.hamr.top/cli',
  },
  {
    title: 'Postman Collection',
    command: '点击下载',
    icon: <FileText className="w-5 h-5" />,
    docs: 'https://docs.hamr.top/postman',
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">开发者资源</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            HamR 生态的所有资源入口，从文档、API 到工具链一站直达。
          </p>
        </motion.div>

        <div className="space-y-12 mb-20">
          {resources.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`flex items-center gap-3 mb-5 ${group.color}`}>
                {group.icon}
                <h2 className="text-xl font-bold text-white">{group.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block bg-gray-900 border rounded-lg p-6 hover:border-opacity-60 transition-all group ${group.bg}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`mt-0.5 ${group.color}`}>{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                            {item.title}
                          </h3>
                          <code className="text-xs text-gray-500">{item.label}</code>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6">快速安装</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloads.map((dl, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-5"
              >
                <div className="flex items-center gap-2 text-primary-400 mb-3">
                  {dl.icon}
                  <span className="font-medium text-white">{dl.title}</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800 rounded px-3 py-2 mb-3">
                  <code className="text-sm text-primary-300 flex-1 truncate">{dl.command}</code>
                  <button
                    onClick={() => navigator.clipboard.writeText(dl.command)}
                    className="ml-2 text-gray-500 hover:text-white transition-colors text-xs"
                  >
                    复制
                  </button>
                </div>
                <a
                  href={dl.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-500 hover:text-primary-400 transition-colors"
                >
                  查看文档 →
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
