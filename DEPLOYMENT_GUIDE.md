# GitHub部署指南

本指南将详细介绍如何将Keeta NoCode应用程序部署到GitHub。

## 1. 准备工作

### 检查敏感信息
在部署前，请确保已移除所有敏感信息：
- `.env` 文件中的敏感配置（已在部署前处理）
- 检查代码中是否有硬编码的API密钥或敏感数据

### 确认项目结构
项目应包含以下关键文件和目录：
- `package.json` - 项目依赖和脚本
- `vite.config.js` - Vite构建配置
- `src/` - 源代码目录
- `public/` - 静态资源目录
- `.gitignore` - Git忽略配置

## 2. 创建GitHub仓库

### 在GitHub上创建新仓库
1. 登录GitHub账户
2. 点击"New repository"按钮
3. 输入仓库名称（如：keeta-nocode-app）
4. 选择"Public"或"Private"
5. 不要初始化README、.gitignore或license（本地已有）
6. 点击"Create repository"

## 3. 本地Git配置和初始化

### 初始化Git仓库
```bash
cd /path/to/your/project
git init
git add .
git commit -m "Initial commit: Keeta NoCode Application"
```

### 连接远程仓库
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 推送代码到GitHub
```bash
git branch -M main
git push -u origin main
```

## 4. 处理敏感信息

### .env文件处理
由于.env文件包含敏感信息（如VITE_CHAT_ID），在部署到公共仓库前需要：
1. 从仓库中移除.env文件（已处理）
2. 更新.gitignore确保该文件不会被提交

### 移除敏感文件
```bash
git rm --cached .env
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Remove .env from tracking and update .gitignore"
git push
```

## 5. 配置GitHub Pages（可选）

### 通过GitHub UI配置
1. 进入仓库的Settings选项卡
2. 在左侧菜单选择Pages
3. 在"Source"部分选择分支（如gh-pages或main）
4. 选择构建后的目录（通常是/ (root)或/gh-pages）
5. 点击Save保存设置

### 使用GitHub Actions自动部署
项目已包含`.github/workflows/deploy.yml`文件，可自动构建和部署：
1. 确保工作流文件已推送到仓库
2. 在Actions选项卡中启用工作流
3. 每次推送到main分支时会自动构建和部署

## 6. 部署到其他平台

### 部署到Vercel
1. 访问 https://vercel.com
2. 点击"New Project"
3. 连接GitHub仓库
4. 配置构建设置：
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Development Command: `npm run dev`

### 部署到Netlify
1. 访问 https://netlify.com
2. 点击"New site from Git"
3. 选择GitHub并授权
4. 选择仓库
5. 配置构建设置：
   - Build Command: `npm run build`
   - Publish Directory: `dist`

## 7. 环境变量配置（部署后）

如果应用需要环境变量，请在部署平台配置：

### GitHub Pages + Cloudflare Workers
- 在Cloudflare Workers中配置环境变量代理

### Vercel环境变量
1. 进入Project Settings
2. 选择Environment Variables
3. 添加需要的环境变量

### Netlify环境变量
1. 进入Site settings
2. 选择Build & deploy
3. 在Environment中添加环境变量

## 8. CI/CD配置

项目已包含GitHub Actions配置文件，可实现：
- 自动化测试（如添加测试脚本）
- 自动构建
- 自动部署到GitHub Pages

## 9. 常见问题

### 构建失败
- 检查Node.js版本（需要18+）
- 确认所有依赖已正确安装
- 检查构建配置（vite.config.js）

### 部署后页面空白
- 检查路由配置（当前使用HashRouter）
- 确认静态资源路径正确

### GitHub Pages路径问题
- 如使用子目录部署，需在vite.config.js中设置base路径

## 10. 维护和更新

### 日常更新流程
1. 在本地开发新功能
2. 提交更改到main分支
3. GitHub Actions自动构建和部署（如已配置）

### 版本管理
- 使用语义化版本号
- 在package.json中更新版本
- 使用Git标签标记版本

---

注意：本项目使用了美团的NoCode框架，部署时请注意相关依赖和许可要求。