import { motion } from 'framer-motion';
import { Users, GitPullRequest, Heart, Award } from 'lucide-react';

export default function Community() {
  const stats = [
    { label: '注册开发者', value: '1', icon: <Users className="w-8 h-8" /> },
    { label: '贡献者', value: '1', icon: <GitPullRequest className="w-8 h-8" /> },
    { label: 'GitHub Stars', value: '0', icon: <Heart className="w-8 h-8" /> },
    { label: '开源仓库', value: '8', icon: <Award className="w-8 h-8" /> },
  ];

  const projects = [
    {
      name: 'hamr-website',
      description: '官网 (hamr.store) — React + Three.js + Vite',
      difficulty: 'Intermediate',
      issues: 0,
      url: 'https://github.com/hamr-hub/hamr-website',
    },
    {
      name: 'hamr-developer',
      description: '开发者门户 (hamr.top) — React + Vite + Tailwind',
      difficulty: 'Beginner',
      issues: 0,
      url: 'https://github.com/hamr-hub/hamr-developer',
    },
    {
      name: 'hamr-docs',
      description: '技术文档站 (docs.hamr.top) — React + Vite',
      difficulty: 'Beginner',
      issues: 0,
      url: 'https://github.com/hamr-hub/hamr-docs',
    },
    {
      name: 'hamr-infra',
      description: '基础设施配置 — Nginx + Docker + Prometheus',
      difficulty: 'Advanced',
      issues: 0,
      url: 'https://github.com/hamr-hub/hamr-infra',
    },
  ];

  const contributors = [
    { name: 'hyx (Core Dev)', avatar: '👨‍💻', contributions: 120 },
  ];

  const howToContribute = [
    {
      step: '1',
      title: '找到感兴趣的项目',
      description: '浏览我们的开源项目列表，选择你感兴趣的领域',
    },
    {
      step: '2',
      title: '查看 Good First Issues',
      description: '从标记为 "good first issue" 的简单任务开始',
    },
    {
      step: '3',
      title: 'Fork 并提交 PR',
      description: 'Fork 项目，完成开发后提交 Pull Request',
    },
    {
      step: '4',
      title: '代码审查与合并',
      description: '核心团队会尽快审查您的代码并提供反馈',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">开发者社区</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            加入全球开发者社区，一起构建智能家居的未来。
            无论你是新手还是专家，我们都欢迎你的贡献。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center"
            >
              <div className="text-primary-500 flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">如何贡献</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToContribute.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800"
              >
                <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">开源项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-primary-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.difficulty === 'Beginner'
                        ? 'bg-green-500/20 text-green-400'
                        : project.difficulty === 'Intermediate'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {project.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {project.issues} Good First Issues
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-400 text-sm font-medium"
                  >
                    查看项目 →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">核心贡献者</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {contributors.map((contributor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-4 rounded-lg border border-gray-800 text-center"
              >
                <div className="text-5xl mb-3">{contributor.avatar}</div>
                <div className="font-semibold mb-1">{contributor.name}</div>
                <div className="text-xs text-gray-400">
                  {contributor.contributions} commits
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-lg p-8 border border-primary-500/30">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">参与 HamR 开源建设</h3>
            <p className="text-gray-300 mb-6">
              HamR 处于早期开发阶段，欢迎开发者参与贡献代码、提交 Issue、完善文档。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/hamr-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                访问 GitHub 组织
              </a>
              <a
                href="https://github.com/hamr-hub/hamr-website/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                贡献指南
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
