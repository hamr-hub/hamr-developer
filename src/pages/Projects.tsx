import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Star, GitFork, Circle } from 'lucide-react';

const projects = [
  {
    name: 'hamr-website',
    fullName: 'HamR Website',
    description: '官网前端，Three.js 3D 交互场景 + 手势/麦克风控制演示，展示 HamR 的核心理念',
    language: 'TypeScript',
    type: '客户端',
    status: 'Active',
    stars: 0,
    forks: 0,
    url: 'https://github.com/hamr-hub/hamr-website',
    topics: ['react', 'three.js', 'vite', 'tailwind'],
  },
  {
    name: 'hamr-developer',
    fullName: 'HamR Developer',
    description: '开发者门户（hamr.top），展示开源项目、API 文档、贡献指南和生态导航',
    language: 'TypeScript',
    type: '客户端',
    status: 'Active',
    stars: 0,
    forks: 0,
    url: 'https://github.com/hamr-hub/hamr-developer',
    topics: ['react', 'vite', 'tailwind', 'framer-motion'],
  },
  {
    name: 'hamr-docs',
    fullName: 'HamR Docs',
    description: '技术文档站（docs.hamr.top），API 参考、架构设计、系统安全等开发者文档',
    language: 'TypeScript',
    type: '文档',
    status: 'Active',
    stars: 0,
    forks: 0,
    url: 'https://github.com/hamr-hub/hamr-docs',
    topics: ['react', 'vite', 'documentation'],
  },
  {
    name: 'hamr-help',
    fullName: 'HamR Help',
    description: '帮助中心（help.hamr.store），用户使用指南、FAQ、故障排查文档',
    language: 'TypeScript',
    type: '文档',
    status: 'Active',
    stars: 0,
    forks: 0,
    url: 'https://github.com/hamr-hub/hamr-help',
    topics: ['react', 'vite', 'documentation'],
  },
  {
    name: 'hamr-infra',
    fullName: 'HamR Infra',
    description: '基础设施配置，Nginx 反向代理、Docker Compose、Prometheus 监控、备份脚本',
    language: 'Shell',
    type: '工具链',
    status: 'Active',
    stars: 0,
    forks: 0,
    url: 'https://github.com/hamr-hub/hamr-infra',
    topics: ['nginx', 'docker', 'prometheus', 'grafana'],
  },
  {
    name: 'hamr-app',
    fullName: 'HamR App',
    description: 'HamR 管家应用（app.hamr.store），核心五维数据管理前后端',
    language: 'Rust',
    type: '服务端',
    status: 'Active',
    stars: 0,
    forks: 0,
    url: 'https://github.com/hamr-hub/hamr-app',
    topics: ['rust', 'react', 'fullstack'],
  },
  {
    name: 'hamr-account',
    fullName: 'HamR Account',
    description: '账号中心（account.hamr.store），用户认证与家庭成员管理',
    language: 'Rust',
    type: '服务端',
    status: 'Active',
    stars: 0,
    forks: 0,
    url: 'https://github.com/hamr-hub/hamr-account',
    topics: ['rust', 'react', 'auth'],
  },
  {
    name: 'hamr-jiabu',
    fullName: 'HamR JiaBu',
    description: 'JiaBu 决策系统（jiabu.hamr.store），家庭 AI 决策助理',
    language: 'Rust',
    type: '服务端',
    status: 'Active',
    stars: 0,
    forks: 0,
    url: 'https://github.com/hamr-hub/hamr-jiabu',
    topics: ['rust', 'ai', 'decision-engine'],
  },
  {
    name: 'hamr-mood-calender',
    fullName: 'HamR Mood Calendar',
    description: '心情日历应用，记录每日心情数据，支持日历视图与心情统计图表',
    language: 'TypeScript',
    type: '客户端',
    status: 'Active',
    stars: 0,
    forks: 0,
    url: 'https://github.com/hamr-hub/hamr-mood-calender',
    topics: ['react', 'vite', 'calendar', 'mood-tracking'],
  },
];

const LANGUAGES = ['全部', 'TypeScript', 'Rust', 'Shell'];
const TYPES = ['全部', '服务端', '客户端', '工具链', '文档'];
const STATUSES = ['全部', 'Active', 'Maintained', 'Archived'];

const languageColors: Record<string, string> = {
  Rust: 'text-orange-400 bg-orange-400/10',
  TypeScript: 'text-blue-400 bg-blue-400/10',
  Shell: 'text-green-400 bg-green-400/10',
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
