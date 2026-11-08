# plants13-blog

个人博客，基于 [Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper) 主题，部署在 **Cloudflare Pages**。

- 仓库：<https://github.com/plants13/plants13-blog>
- 线上地址：<https://plants13.neorizon.xyz>
- DNS：`plants13.neorizon.xyz` 以 CNAME 指向 `plants13-blog.pages.dev`（解析托管在阿里云，未迁移 NS）

## 本地开发

```sh
npm install      # 安装依赖
npm run dev      # 本地预览 http://localhost:4321
npm run build    # 完整构建（astro check + build + pagefind 索引）
npm run preview  # 预览构建产物
```

要求 Node.js >= 22.23.4（已提供 `.nvmrc`）。

> **依赖源说明**：`package-lock.json` 里的下载地址固定为官方源 `registry.npmjs.org`，以便 Cloudflare 构建稳定。
> 本机如果配置了淘宝镜像，更新依赖后请检查 lockfile 里的 `resolved` 是否被改回镜像地址。

## 写文章

在 `src/content/posts/` 下新建 `.md` 或 `.mdx`，文件名即 URL（`/posts/<文件名>/`）：

```yaml
---
title: 文章标题
pubDatetime: 2026-11-08T21:00:00+08:00
featured: false
draft: false
tags:
  - 随笔
description: 一句话摘要，用于 SEO 和列表页
---
```

可选字段：`modDatetime`（更新于）、`ogImage`、`canonicalURL`、`hideToc`、`hideEditPost`。
以 `_` 开头的文件/目录不会被当作文章。

## 字体

- **正文**：MiSans（小米开源字体，通过 npm 包 `misans` 的可变字重子集加载）
- **代码块 / 行内代码**：Consolas
- **OG 图片**：使用 `public/default-og.jpg` 静态图（动态生成已关闭，因为它依赖字体渲染）

相关文件：

| 想改什么 | 改哪里 |
| --- | --- |
| 正文 / 等宽字体 | `src/styles/theme.css` 里的 `--font-app`、`--font-mono` |
| 代码块字体 | `src/styles/typography.css` 的 `.app-prose code`、`.astro-code` |
| MiSans 引入 | `src/styles/global.css` 顶部 `@import "misans/lib/Normal/MiSansVF.min.css"` |

## 站点配置

主要配置集中在 [`astro-paper.config.ts`](astro-paper.config.ts)：站点地址、标题、描述、作者、每页文章数、功能开关（搜索 / 目录 / 归档 / 动态 OG 图）、社交链接。

`astro.config.ts` 负责构建配置：i18n（当前 `zh-CN`）、Markdown 插件、Shiki 代码高亮主题。

## 部署到 Cloudflare Pages

| 配置项 | 值 |
| --- | --- |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `NODE_VERSION` = `22` |

自定义域名在 Pages 项目 → **Custom domains** 添加；因为 DNS 不在 Cloudflare，需要按页面提示到阿里云加 CNAME。

## 目录结构

```text
├── public/                  # 静态资源（favicon、默认 OG 图）
├── src/
│   ├── components/          # 导航、卡片、分页等组件
│   ├── content/
│   │   ├── posts/           # 文章
│   │   └── pages/           # about 等独立页面
│   ├── i18n/lang/           # 界面文案（zh-CN / en）
│   ├── layouts/             # 页面骨架
│   ├── pages/               # 路由
│   ├── styles/              # Tailwind 主题、排版、全局样式
│   └── config.ts            # 配置解析层（一般不用改）
├── astro-paper.config.ts    # 站点配置（改这里）
└── astro.config.ts          # 构建配置
```

主题版权归 [AstroPaper](https://github.com/satnaing/astro-paper) 作者；MiSans 遵循小米的开源许可，可免费商用。
