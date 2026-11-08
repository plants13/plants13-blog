---
title: 你好，世界
pubDatetime: 2026-11-08T21:00:00+08:00
featured: true
draft: false
tags:
  - 随笔
description: 这个博客的第一篇文章，记录一下它是怎么搭起来的。
---

这是这个博客的第一篇文章。

## 它是怎么来的

站点用 [Astro](https://astro.build) 搭建，主题是 [AstroPaper](https://github.com/satnaing/astro-paper)，托管在 **Cloudflare Pages**。

- 源码放在 GitHub 的私有仓库里，每次推送自动构建

- 正文用 Markdown / MDX 写

- 支持深色模式、全文搜索、标签和归档

站点地址：<https://plants13.neorizon.xyz>

## 怎么发新文章

在 `src/content/posts/` 下新建一个 `.md` 文件，开头写：

```yaml
---
title: 文章标题
pubDatetime: 2026-11-08T21:00:00+08:00
tags:
  - 随笔
description: 一句话摘要，用于 SEO 和列表页
---
```

保存后提交，Cloudflare Pages 会自动重新构建发布。
