---
title: Markdown 与代码块示例
pubDatetime: 2026-11-07T18:30:00+08:00
draft: false
tags:
  - Markdown
  - 示例
description: 一篇用来检查排版效果的示例文章，包含代码块、表格、引用和列表。
---

这篇文章用来检查主题的排版效果，尤其是代码块的等宽字体。

## 代码块

```ts
type Post = {
  title: string;
  tags: string[];
  published: boolean;
};

export function filterPublished(posts: Post[]): Post[] {
  return posts.filter((post) => post.published);
}
```

```powershell
# 本地预览
npm run dev

# 构建产物
npm run build
```

行内代码长这样：`const answer = 42`。

## 表格

| 项目     | 版本   | 说明        |
| -------- | ------ | ----------- |
| Astro    | 7.4.x  | 静态站点框架 |
| AstroPaper | 7.1.0 | 博客主题     |
| Cloudflare Pages | — | 部署平台 |

## 引用与列表

> 简单的东西往往最难写好。

1. 第一步
2. 第二步
3. 第三步

- 无序项 A
- 无序项 B

## 数学与脚注

行内公式可以用 LaTeX：$E = mc^2$。
