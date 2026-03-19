import { motion } from 'framer-motion';
import { useState } from 'react';
import { Download, Code2, Package, Terminal, Check, Copy } from 'lucide-react';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="text-gray-500 hover:text-white transition-colors text-xs flex items-center gap-1"
    >
      {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
      {copied ? '已复制' : '复制'}
    </button>
  );
}

export default function SDK() {
  const sdks = [
    {
      name: 'TypeScript / JavaScript',
      icon: '🟦',
      package: '@hamr/core',
      install: 'npm install @hamr/core',
      version: 'v0.1.0',
      status: '开发中',
      statusColor: 'bg-yellow-500/20 text-yellow-400',
      docs: 'https://docs.hamr.top/sdk/typescript',
    },
    {
      name: 'Rust',
      icon: '🦀',
      package: 'hamr-sdk',
      install: 'cargo add hamr-sdk',
      version: 'v0.1.0',
      status: '开发中',
      statusColor: 'bg-yellow-500/20 text-yellow-400',
      docs: 'https://docs.hamr.top/sdk/rust',
    },
    {
      name: 'Python',
      icon: '🐍',
      package: 'hamr-python',
      install: 'pip install hamr-python',
      version: '计划中',
      status: '计划中',
      statusColor: 'bg-gray-500/20 text-gray-400',
      docs: 'https://docs.hamr.top/sdk/python',
    },
    {
      name: 'Go',
      icon: '🐹',
      package: 'hamr-go',
      install: 'go get github.com/hamr-hub/hamr-go',
      version: '计划中',
      status: '计划中',
      statusColor: 'bg-gray-500/20 text-gray-400',
      docs: 'https://docs.hamr.top/sdk/go',
    },
  ];

  const quickStart = `// TypeScript 示例
import { HamRClient } from '@hamr/core';

// 1. 初始化客户端
const client = new HamRClient({
  apiKey: process.env.HAMR_API_KEY,
  endpoint: 'https://api.hamr.top/v1',
});

// 2. 发送对话请求
const response = await client.chat({
  message: '帮我打开客厅的灯',
  context: { room: 'living_room' }
});

console.log(response.text);
// "好的，已为您打开客厅的灯"

// 3. 获取设备列表
const devices = await client.devices.list();

// 4. 控制设备
await client.devices.control('light_001', {
  action: 'turn_on',
  brightness: 80
});`;

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: '类型安全',
      description: 'TypeScript 完整类型定义，智能代码补全',
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: '轻量设计',
      description: '无额外依赖，打包体积最小化',
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: '开发友好',
      description: '完善的错误处理、调试日志和单元测试',
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: '持续迭代',
      description: '项目处于早期阶段，欢迎参与贡献 SDK',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SDK 下载</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            选择你熟悉的编程语言，开始构建智能家居应用。
            SDK 目前处于早期开发阶段，欢迎参与贡献。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {sdks.map((sdk, index) => (
            <motion.div
              key={sdk.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-primary-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{sdk.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{sdk.name}</h3>
                    <code className="text-sm text-gray-400">{sdk.package}</code>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${sdk.statusColor}`}>
                  {sdk.status}
                </span>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">安装命令</span>
                  <CopyButton text={sdk.install} />
                </div>
                <code className="text-primary-400 text-sm block">{sdk.install}</code>
              </div>

              <div className="flex space-x-3">
                <a
                  href={sdk.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-2 rounded-lg transition-colors"
                >
                  查看文档
                </a>
                <a
                  href={`https://github.com/hamr-hub/${sdk.package}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-center py-2 rounded-lg transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">快速开始</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="code-block max-w-4xl mx-auto relative"
          >
            <div className="absolute top-3 right-3">
              <CopyButton text={quickStart} />
            </div>
            <pre className="text-gray-300 text-sm leading-relaxed">{quickStart}</pre>
          </motion.div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">SDK 特性</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800"
              >
                <div className="text-primary-500 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-lg p-8 text-center border border-primary-500/30">
          <h3 className="text-2xl font-bold mb-4">想贡献 SDK？</h3>
          <p className="text-gray-300 mb-6">
            HamR SDK 处于早期阶段，欢迎开发者参与贡献各语言的 SDK 实现。
          </p>
          <a
            href="https://github.com/hamr-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            访问 GitHub 组织
          </a>
        </div>
      </div>
    </div>
  );
}
