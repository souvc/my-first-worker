# My First Worker

一个基于 Cloudflare Workers 的简单导航页面项目，用于学习和练习 Workers 开发。

## 🚀 项目简介

这是一个入门级的 Cloudflare Workers 项目，展示了如何在 Workers 环境中创建基本的 Web 应用程序。项目包含了路由处理、HTML 页面渲染、API 接口等基础功能。

## ✨ 功能特性

- 🏠 **导航首页** - 美观的导航页面，包含项目信息和链接
- 📖 **关于页面** - 项目介绍和功能展示
- 🔗 **API 接口** - 简单的 JSON API 示例
- 📱 **响应式设计** - 适配不同设备屏幕
- 🎨 **现代 UI** - 使用渐变背景和现代 CSS 技术
- ⚡ **快速响应** - 基于 Cloudflare 全球边缘网络

## 🛠️ 技术栈

- **运行时**: Cloudflare Workers
- **开发工具**: Wrangler CLI
- **测试框架**: Vitest
- **前端技术**: HTML5, CSS3, JavaScript
- **包管理**: pnpm

## 📁 项目结构

```
my-first-worker/
├── src/
│   └── index.js          # 主要的 Worker 代码
├── test/
│   └── index.spec.js     # 测试文件
├── .editorconfig         # 编辑器配置
├── .gitignore           # Git 忽略文件
├── .prettierrc          # 代码格式化配置
├── package.json         # 项目依赖和脚本
├── pnpm-lock.yaml       # 锁定依赖版本
├── vitest.config.js     # 测试配置
├── wrangler.jsonc       # Wrangler 配置
└── README.md           # 项目说明文档
```

## 🚀 快速开始

### 环境要求

- Node.js 16+
- pnpm (推荐) 或 npm
- Cloudflare 账户

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install
```

### 本地开发

```bash
# 启动开发服务器
pnpm dev
# 或
npm run dev
```

访问 `http://localhost:8787` 查看应用。

### 运行测试

```bash
# 运行测试
pnpm test
# 或
npm test
```

### 部署到 Cloudflare

```bash
# 部署到生产环境
pnpm deploy
# 或
npm run deploy
```

## 📋 API 接口

### 路由列表

| 路径 | 方法 | 描述 |
|------|------|------|
| `/` | GET | 导航首页 |
| `/about` | GET | 关于页面 |
| `/api/hello` | GET | API 测试接口 |

### API 示例

#### GET /api/hello

返回简单的 JSON 响应：

```json
{
  "message": "Hello from API!"
}
```

## 🎨 页面功能

### 导航首页 (`/`)
- 现代化的渐变背景设计
- 响应式导航链接
- 实时时间显示
- 项目信息展示

### 关于页面 (`/about`)
- 项目详细介绍
- 功能特性展示
- 网格布局的特性卡片
- 返回首页链接

## 🧪 测试

项目包含基本的单元测试和集成测试：

- **单元测试**: 测试 Worker 的 fetch 处理函数
- **集成测试**: 测试完整的请求响应流程

测试使用 Vitest 框架和 Cloudflare Workers 测试工具。

## 📝 配置说明

### wrangler.jsonc

```jsonc
{
  "name": "my-first-worker",        // Worker 名称
  "main": "src/index.js",          // 入口文件
  "compatibility_date": "2024-01-01", // 兼容性日期
  "observability": {
    "enabled": true                   // 启用可观测性
  }
}
```

### package.json 脚本

- `dev`: 启动本地开发服务器
- `start`: 启动开发服务器的别名
- `deploy`: 部署到 Cloudflare
- `test`: 运行测试

## 🔧 开发指南

### 添加新路由

在 `src/index.js` 的 `switch` 语句中添加新的 case：

```javascript
case '/new-route':
  return new Response('New page content', {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
```

### 添加新的 API 接口

```javascript
case '/api/new-endpoint':
  return new Response(JSON.stringify({ data: 'response' }), {
    headers: { 'Content-Type': 'application/json' }
  });
```

### 样式自定义

项目使用内联 CSS，可以直接在 HTML 模板中修改样式。主要使用了：
- CSS Grid 和 Flexbox 布局
- CSS 渐变背景
- 响应式媒体查询
- CSS 过渡动画

## 🌟 学习要点

通过这个项目，你可以学习到：

1. **Cloudflare Workers 基础**
   - Worker 的基本结构
   - 请求处理和响应
   - 路由实现

2. **Web 开发基础**
   - HTML 页面结构
   - CSS 样式设计
   - JavaScript 交互

3. **现代开发工具**
   - Wrangler CLI 使用
   - 测试框架应用
   - 项目配置管理

## 📚 相关资源

- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
- [Vitest 测试框架](https://vitest.dev/)
- [Cloudflare Workers 示例](https://developers.cloudflare.com/workers/examples/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

本项目仅用于学习和练习目的。

---

**Happy Coding! 🎉**