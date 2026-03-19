import { motion } from 'framer-motion';
import { Book, Code, Database, Zap, Rocket, AlertCircle, Check, Copy } from 'lucide-react';
import { useState } from 'react';

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

export default function Docs() {
  const [selectedEndpoint, setSelectedEndpoint] = useState('quickstart');

  const endpoints = [
    {
      id: 'quickstart',
      name: 'Quick Start',
      description: '5 分钟快速上手',
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      id: 'chat',
      name: 'Chat API',
      description: '与智能助理对话',
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: 'devices',
      name: 'Devices API',
      description: '管理智能设备',
      icon: <Database className="w-5 h-5" />,
    },
    {
      id: 'automation',
      name: 'Automation API',
      description: '自动化规则引擎',
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: 'rate-limits',
      name: 'Rate Limits',
      description: '请求频率限制',
      icon: <AlertCircle className="w-5 h-5" />,
    },
  ];

  const apiExamples: Record<string, string> = {
    quickstart: `# 步骤 1：获取 API Key
# 访问 https://dashboard.hamr.top 申请 API Key

# 步骤 2：安装 SDK
npm install @hamr/core

# 步骤 3：初始化并调用
import { HamRClient } from '@hamr/core';

const client = new HamRClient({
  apiKey: 'YOUR_API_KEY',
});

// 测试连接
const response = await client.chat({
  message: '你好，HamR！',
});

console.log(response.text);
// "你好！我是 HamR 智能助理，有什么可以帮你？"`,
    chat: `POST /v1/chat
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "message": "帮我打开客厅的灯",
  "context": {
    "room": "living_room",
    "user_id": "user_123"
  }
}

// Response 200
{
  "text": "好的，已为您打开客厅的灯",
  "actions": [
    {
      "type": "device_control",
      "device_id": "light_001",
      "action": "turn_on"
    }
  ],
  "request_id": "req_abc123"
}`,
    devices: `GET /v1/devices
Authorization: Bearer YOUR_API_KEY

// Response 200
{
  "devices": [
    {
      "id": "light_001",
      "name": "客厅主灯",
      "type": "light",
      "status": "online",
      "state": {
        "power": "on",
        "brightness": 80
      }
    }
  ],
  "total": 1
}

// 控制设备
POST /v1/devices/light_001/control
{
  "action": "set_brightness",
  "value": 50
}

// Response 200
{
  "success": true,
  "device_id": "light_001"
}`,
    automation: `POST /v1/automations
Authorization: Bearer YOUR_API_KEY

{
  "name": "晚上自动开灯",
  "trigger": {
    "type": "time",
    "time": "18:00"
  },
  "conditions": [
    {
      "type": "sensor",
      "sensor_id": "light_sensor_001",
      "operator": "<",
      "value": 100
    }
  ],
  "actions": [
    {
      "type": "device_control",
      "device_id": "light_001",
      "action": "turn_on"
    }
  ]
}

// Response 201
{
  "id": "auto_001",
  "name": "晚上自动开灯",
  "status": "active"
}`,
    'rate-limits': `# 请求频率限制

## 默认限制
- 免费计划：60 次/分钟
- 基础计划：300 次/分钟
- 企业计划：自定义

## 响应 Headers
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1712345678

## 超出限制 Response 429
{
  "error": "rate_limit_exceeded",
  "message": "Too many requests",
  "retry_after": 30
}

## 最佳实践
// 检查剩余配额
const remaining = response.headers['x-ratelimit-remaining'];
if (parseInt(remaining) < 10) {
  console.warn('API 配额即将用完');
}`,
  };

  const currentEndpoint = endpoints.find((e) => e.id === selectedEndpoint);

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Book className="w-8 h-8 text-primary-500" />
            <h1 className="text-4xl font-bold">API 文档</h1>
          </div>
          <p className="text-gray-400 text-lg">
            完整的 RESTful API 参考文档，包含认证、端点、请求示例和响应格式。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sticky top-24">
              <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase">端点分类</h3>
              <div className="space-y-2">
                {endpoints.map((endpoint) => (
                  <button
                    key={endpoint.id}
                    onClick={() => setSelectedEndpoint(endpoint.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                      selectedEndpoint === endpoint.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {endpoint.icon}
                    <div>
                      <div className="font-medium">{endpoint.name}</div>
                      <div className="text-xs opacity-75">{endpoint.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              key={selectedEndpoint}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 rounded-lg border border-gray-800 p-8"
            >
              <h2 className="text-2xl font-bold mb-4">{currentEndpoint?.name}</h2>
              <p className="text-gray-400 mb-6">{currentEndpoint?.description}</p>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">
                    {selectedEndpoint === 'quickstart' ? '入门示例' : '请求示例'}
                  </h3>
                  <CopyButton text={apiExamples[selectedEndpoint]} />
                </div>
                <div className="code-block relative">
                  <pre className="text-gray-300 text-sm leading-relaxed">
                    {apiExamples[selectedEndpoint]}
                  </pre>
                </div>
              </div>

              {selectedEndpoint !== 'rate-limits' && selectedEndpoint !== 'quickstart' && (
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold mb-3">认证方式</h3>
                  <p className="text-gray-400 mb-2">
                    所有 API 请求需要在 HTTP Header 中包含 API Key：
                  </p>
                  <code className="block bg-gray-900 px-4 py-2 rounded text-primary-400 text-sm">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                  <p className="text-gray-400 text-sm mt-3">
                    在{' '}
                    <a href="https://dashboard.hamr.top" className="text-primary-500 hover:underline">
                      开发者控制台
                    </a>{' '}
                    获取您的 API Key
                  </p>
                </div>
              )}

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://docs.hamr.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 transition-colors p-4 rounded-lg border border-gray-700"
                >
                  <h4 className="font-semibold mb-2">📚 完整技术文档</h4>
                  <p className="text-gray-400 text-sm">深入了解架构设计和最佳实践</p>
                </a>
                <a
                  href="https://status.hamr.top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 transition-colors p-4 rounded-lg border border-gray-700"
                >
                  <h4 className="font-semibold mb-2">🟢 API 状态监控</h4>
                  <p className="text-gray-400 text-sm">实时查看服务状态和 SLA</p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
