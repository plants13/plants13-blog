# plants13-blog

个人博客，基于 [Astro](https://astro.build) 的 Blog 模板，部署在 **Cloudflare Pages**。

- 仓库：<https://github.com/plants13/plants13-blog>
- 线上地址：<https://plants13-blog.pages.dev>

## 本地开发

```sh
npm install      # 安装依赖
npm run dev      # 本地预览 http://localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

要求 Node.js >= 22.23.4（已提供 `.nvmrc`）。

> **依赖源说明**：`package-lock.json` 里的下载地址固定为官方源 `registry.npmjs.org`，以便 Cloudflare 构建稳定。
> 本机如果配置了淘宝镜像，更新依赖后请检查 lockfile 里的 `resolved` 是否被改回镜像地址，必要时执行
> `npm install --registry=https://registry.npmjs.org` 重新生成。

## 写文章

在 `src/content/blog/` 下新建 `.md` 或 `.mdx` 文件：

```yaml
---
title: '文章标题'
description: '一句话摘要，用于 SEO 和列表页'
pubDate: '2026-11-08'
# updatedDate: '2026-11-10'   # 可选
# heroImage: '../../assets/xxx.jpg'  # 可选
---
```

正文用 Markdown 写。文件名会成为 URL 的一部分（如 `welcome.md` → `/blog/welcome/`）。

## 部署到 Cloudflare Pages

仓库是公开的，Cloudflare 可以直接读取。步骤：

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 首次使用需安装 **Cloudflare GitHub App** 并授权访问 `plants13-blog`
3. 选择仓库后，构建配置填：

   | 配置项 | 值 |
   | --- | --- |
   | Framework preset | `Astro` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version（环境变量） | `NODE_VERSION` = `22` |

4. 保存并部署。之后每次 `git push` 到 `main` 会自动构建发布。

> 自定义域名：Pages 项目 → **Custom domains** → 添加域名，按提示在 DNS 加 CNAME 即可。

## 目录结构

```text
├── public/                 # 静态资源（favicon 等），原样发布
├── src/
│   ├── assets/             # 会被 Astro 优化的图片、字体
│   ├── components/         # Header / Footer / BaseHead 等
│   ├── content/blog/       # 文章（Markdown / MDX）
│   ├── content.config.ts   # 文章的 frontmatter 类型校验
│   ├── layouts/            # 页面布局
│   ├── pages/              # 路由：首页、/blog、/about、RSS
│   ├── styles/global.css   # 全局样式
│   └── consts.ts           # 站点标题、描述
├── astro.config.mjs        # 站点配置（site、集成、字体）
└── package.json
```

## 常用改动位置

| 想改什么 | 改哪里 |
| --- | --- |
| 站点标题 / 描述 | `src/consts.ts` |
| 域名（影响 RSS、sitemap、canonical） | `astro.config.mjs` 的 `site` |
| 导航菜单 | `src/components/Header.astro` |
| 关于页 | `src/pages/about.astro` |
| 配色 / 字体样式 | `src/styles/global.css` |

## 说明

`src/content/blog/` 里的 `first-post.md`、`second-post.md`、`third-post.md`、`markdown-style-guide.md`、`using-mdx.md` 是模板自带的示例，可以直接删除。

主题基于 [Bear Blog](https://github.com/HermanMartinus/bearblog/)。
