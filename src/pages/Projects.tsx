import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Star, GitFork, Circle } from 'lucide-react';

const projects = [
  {
    name: 'hamr-core',
    fullName: 'HamR Core',
    description: '核心智能助理引擎，提供 NLP 处理、设备控制、规则引擎等核心能力',
    language: 'Rust',
    type: '服务端',
    status: 'Active',
    stars: 1200,
    forks: 98,
    url: 'https://github.com/hamr-hub/hamr-core',
    topics: ['rust', 'ai', 'iot', 'nlp'],
  },
  {
    name: 'hamr-web',
    fullName: 'HamR Web',
    description: 'Web 控制面板，支持设备管理、自动化配置、数据可视化',
    language: 'TypeScript',
    type: '客户端',
    status: 'Active',
    stars: 860,
    forks: 72,
    url: 'https://github.com/hamr-hub/hamr-web',
    topics: ['react', 'typescript', 'dashboard'],
  },
  {
    name: 'hamr-sdk',
    fullName: 'HamR SDK',
    description: '多语言开发者 SDK，支持 TypeScript、Python、Go、Rust',
    language: 'TypeScript',
    type: '工具链',
    status: 'Active',
    stars: 640,
    forks: 55,
    url: 'https://github.com/hamr-hub/hamr-sdk',
    topics: ['sdk', 'typescript', 'api-client'],
  },
  {
    name: 'hamr-cli',
    fullName: 'HamR CLI',
    description: '命令行管理工具，支持部署、配置、调试等操作',
    language: 'Rust',
    type: '工具链',
    status: 'Active',
    stars: 420,
    forks: 38,
    url: 'https://github.com/hamr-hub/hamr-cli',
    topics: ['rust', 'cli', 'devtools'],
  },
  {
    name: 'hamr-docs',
    fullName: 'HamR Docs',
    description: '技术文档站，包含 API 参考、部署指南、架构设计等',
    language: 'Markdown',
    type: '文档',
    status: 'Active',
    stars: 180,
    forks: 45,
    url: 'https://github.com/hamr-hub/hamr-docs',
    topics: ['documentation', 'docusaurus'],
  },
  {
    name: 'hamr-deploy',
    fullName: 'HamR Deploy',
    description: 'Docker + K8s 部署工具，提供一键部署、健康检查、滚动更新',
    language: 'Go',
    type: '工具链',
    status: 'Maintained',
    stars: 310,
    forks: 29,
    url: 'https://github.com/hamr-hub/hamr-deploy',
    topics: ['go', 'docker', 'kubernetes', 'devops'],
  },
  {
    name: 'hamr-python',
    fullName: 'HamR Python',
    description: 'Python SDK，支持同步/异步调用，适合数据分析和脚本场景',
    language: 'Python',
    type: '工具链',
    status: 'Active',
    stars: 290,
    forks: 34,
    url: 'https://github.com/hamr-hub/hamr-python',
    topics: ['python', 'sdk', 'asyncio'],
  },
  {
    name: 'hamr-homeassistant',
    fullName: 'HamR HomeAssistant',
    description: 'Home Assistant 集成插件，将 HamR 接入主流智能家居平台',
    language: 'Python',
    type: '客户端',
    status: 'Maintained',
    stars: 520,
    forks: 67,
    url: 'https://github.com/hamr-hub/hamr-homeassistant',
    topics: ['homeassistant', 'python', 'iot'],
  },
];

const LANGUAGES = ['全部', 'Rust', 'TypeScript', 'Python', 'Go', 'Markdown'];
const TYPES = ['全部', '服务端', '客户端', '工具链', '文档'];
const STATUSES = ['全部', 'Active', 'Maintained', 'Archived'];

const languageColors: Record<string, string> = {
  Rust: 'text-orange-400 bg-orange-400/10',
  TypeScript: 'text-blue-400 bg-blue-400/10',
  Python: 'text-yellow-400 bg-yellow-400/10',
  Go: 'text-cyan-400 bg-cyan-400/10',
  Markdown: 'text-gray-400 bg-gray-400/10',
};

const statusColors: Record<string, string> = {
  Active: 'text-green-400',
  Maintained: 'text-yellow-400',
  Archived: 'text-gray-400',
};

export default function Projects() {
  const [langFilter, setLangFilter] = useState('全部');
  const [typeFilter, setTypeFilter] = useState('全部');
  const [statusFilter, setStatusFilter] = useState('全部');

  const filtered = projects.filter((p) => {
    const byLang = langFilter === '全部' || p.language === langFilter;
    const byType = typeFilter === '全部' || p.type === typeFilter;
    const byStatus = statusFilter === '全部' || p.status === statusFilter;
    return byLang && byType && byStatus;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">开源项目</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            HamR 所有核心组件均开源。选择你感兴趣的项目，
            参与贡献或将其集成到你的系统中。
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-6 mb-10">
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">语言</span>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  onClick={() => setLangFilter(l)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    langFilter === l
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">类型</span>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    typeFilter === t
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">状态</span>
            <div className="flex flex-wrap gap-2">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    statusFilter === s
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-6">
          共 {filtered.length} 个项目
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-primary-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold group-hover:text-primary-400 transition-colors">
                      {project.fullName}
                    </h3>
                    <Circle
                      className={`w-2 h-2 fill-current ${statusColors[project.status]}`}
                    />
                    <span className={`text-xs ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                  <code className="text-xs text-gray-500">hamr-hub/{project.name}</code>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${languageColors[project.language] ?? 'text-gray-400 bg-gray-400/10'}`}>
                  {project.language}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.topics.map((topic) => (
                  <span key={topic} className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">
                    #{topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {project.stars.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {project.forks}
                  </span>
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded">
                    {project.type}
                  </span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  查看
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            没有符合筛选条件的项目
          </div>
        )}
      </div>
    </div>
  );
}
