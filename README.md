# HamR 开发者门户 (hamr.top)

> HamR 技术品牌入口 - 开源、透明、社区驱动

[![Status](https://img.shields.io/badge/status-开发中-yellow)](https://github.com/hamr-hub/hamr-developer)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Framework](https://img.shields.io/badge/framework-Vite+React-61dafb)](https://vitejs.dev)

## 📋 项目概述

**项目编号**: PROJ-006  
**域名**: hamr.top  
**优先级**: ⭐⭐⭐ 高  
**状态**: 待开发  

HamR 开发者门户是技术品牌的对外窗口，展示技术愿景、开源项目、吸引开发者参与社区建设。

## 🎯 核心职责

### 1. 技术品牌展示
- **技术愿景**: 数据主权、隐私优先、开源透明
- **开源承诺**: 核心代码开源、社区驱动、透明治理
- **技术栈概览**: Rust/TypeScript/React/PostgreSQL/MongoDB

### 2. 开发者吸引
- **Quick Start**: 3 步上手
  1. 安装 CLI: `npm install -g hamr-cli`
  2. 初始化项目: `hamr init my-family`
  3. 启动服务: `hamr start`
- **代码示例**: JavaScript/Python/Go 三语言
- **沙箱体验**: 在线 Playground

### 3. 开源项目展示
按语言/类型/状态分类：
- **HamR Core** (Rust) - 核心服务
- **HamR Web** (TypeScript) - Web 前端
- **HamR CLI** (Rust/Node.js) - 命令行工具
- **HamR SDK** (JS/Python/Go) - 多语言 SDK
- **HamR Deploy** (Shell/Docker) - 部署工具

### 4. 社区建设
- **贡献指南**: 如何参与、代码规范、PR 流程
- **Good First Issues**: 新手友好的任务
- **贡献者认可**: Contributors 墙、月度之星

### 5. 资源导航
- [技术文档](https://docs.hamr.top) - API 参考、架构设计
- [API 服务](https://api.hamr.top) - RESTful API
- [在线演示](https://demo.hamr.top) - 产品体验
- [部署指南](https://deploy.hamr.top) - 私有部署
- [服务状态](https://status.hamr.top) - 监控面板

## 🛠️ 技术栈

| 技术 | 用途 | 备注 |
|-----|------|------|
| **Vite** | 构建工具 | 极速开发 |
| **React 18** | 前端框架 | TypeScript |
| **Tailwind CSS** | 样式框架 | 现代化 UI |
| **Framer Motion** | 动画库 | 流畅交互 |
| **Shiki** | 代码高亮 | 语法着色 |
| **Vercel** | 部署托管 | 零成本 |

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

## 📦 项目结构

```
hamr-developer/
├── src/
│   ├── components/
│   │   ├── Hero.tsx             # 首屏
│   │   ├── QuickStart.tsx       # 快速开始
│   │   ├── ProjectCard.tsx      # 项目卡片
│   │   ├── CodeExample.tsx      # 代码示例
│   │   └── Contributors.tsx     # 贡献者墙
│   ├── pages/
│   │   ├── Home.tsx             # 首页
│   │   ├── Projects.tsx         # 开源项目
│   │   ├── Community.tsx        # 社区
│   │   └── Resources.tsx        # 资源导航
│   ├── data/
│   │   ├── projects.json        # 项目数据
│   │   └── contributors.json    # 贡献者数据
│   └── App.tsx
├── public/
│   └── images/                  # 项目截图
├── package.json
└── vite.config.ts
```

## 🎨 页面设计

### 首页 (/)

```
┌─────────────────────────────────┐
│         Hero Section            │
│  "HamR - 数据主权的家庭助手"     │
│   [开始使用] [查看文档]          │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│       Quick Start               │
│  3 步上手，快速体验              │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│      开源项目                    │
│  核心仓库、SDK、工具链展示       │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│      社区动态                    │
│  最新 PR、Issue、贡献者          │
└─────────────────────────────────┘
```

### 开源项目 (/projects)

按分类展示：
- **核心服务**: hamr-account, hamr-app, hamr-jiabu, hamr-api
- **前端应用**: hamr-website, hamr-help, hamr-developer, hamr-docs
- **工具链**: hamr-cli, hamr-deploy, hamr-infra
- **SDK**: hamr-sdk-js, hamr-sdk-python, hamr-sdk-go

每个项目显示：
- 项目名称与描述
- Star/Fork/Issue 数量
- 主要语言
- 最后更新时间
- Quick Links（GitHub/Docs/Demo）

### 社区 (/community)

- **贡献指南**: 如何参与开发
- **Good First Issues**: 新手友好任务
- **贡献者墙**: GitHub 头像展示
- **月度之星**: 突出贡献者

### 资源导航 (/resources)

```
开发者资源
├── 📘 技术文档 (docs.hamr.top)
├── 🔌 API 服务 (api.hamr.top)
├── 🎮 在线演示 (demo.hamr.top)
├── 🚀 部署指南 (deploy.hamr.top)
├── 📊 服务状态 (status.hamr.top)
└── 💬 社区论坛 (discussions)
```

## 💻 代码示例

### JavaScript/TypeScript

```typescript
import { HamRClient } from '@hamr/sdk';

const client = new HamRClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.hamr.top'
});

// 获取家庭成员列表
const members = await client.persons.list();

// 创建待办任务
await client.tasks.create({
  title: '购买食材',
  priority: 'high',
  dueDate: '2026-03-10'
});
```

### Python

```python
from hamr import HamRClient

client = HamRClient(
    api_key='your-api-key',
    base_url='https://api.hamr.top'
)

# 获取家庭成员列表
members = client.persons.list()

# 创建待办任务
client.tasks.create(
    title='购买食材',
    priority='high',
    due_date='2026-03-10'
)
```

### Go

```go
import "github.com/hamr-hub/hamr-sdk-go"

client := hamr.NewClient(
    hamr.WithAPIKey("your-api-key"),
    hamr.WithBaseURL("https://api.hamr.top"),
)

// 获取家庭成员列表
members, err := client.Persons.List(ctx)

// 创建待办任务
err = client.Tasks.Create(ctx, &hamr.Task{
    Title:    "购买食材",
    Priority: "high",
    DueDate:  "2026-03-10",
})
```

## 📊 里程碑

- [ ] **2026-03-12**: 需求确认
- [ ] **2026-04-05**: 设计开发
- [ ] **2026-04-12**: 内容编写
- [ ] **2026-04-15**: 测试上线

## 🔗 相关链接

- [技术文档](https://docs.hamr.top) - API 参考
- [帮助中心](https://help.hamr.store) - 用户文档
- [GitHub 组织](https://github.com/hamr-hub) - 开源代码

## 🤝 贡献指南

欢迎所有形式的贡献！

### 如何参与
1. Fork 仓库
2. 创建功能分支
3. 提交代码
4. 开启 Pull Request

### Good First Issues
- 添加代码示例
- 改进文档
- 修复 UI 细节
- 翻译内容

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)

## 👥 维护者

**HamR Team** - [GitHub Organization](https://github.com/hamr-hub)

---

**最后更新**: 2026-03-05  
**项目状态**: 待开发  
**部署环境**: https://hamr.top (即将上线)
