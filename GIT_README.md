# Keeta NoCode Application

这是一个基于React和Vite的NoCode应用程序，使用现代前端技术栈构建。

## 技术栈

- React 18
- Vite 5
- Tailwind CSS
- Radix UI
- shadcn/ui
- React Router
- TanStack Query

## 项目结构

```
src/
├── components/     # UI组件
├── contexts/       # React上下文
├── lib/           # 工具函数
├── pages/         # 页面组件
├── translations/  # 国际化文件
```

## 本地开发

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 部署

### 部署到GitHub Pages

1. 构建项目：`npm run build`
2. 将 `dist` 目录内容部署到 GitHub Pages

### 部署到其他平台

- Vercel: 直接连接 GitHub 仓库
- Netlify: 选择 `dist` 目录作为发布目录
- 其他平台: 使用 `npm run build` 命令构建

## 配置

如需配置环境变量，请创建 `.env` 文件：

```env
VITE_CHAT_ID=your_chat_id
VITE_CHAT_ENV=development
```

## 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。