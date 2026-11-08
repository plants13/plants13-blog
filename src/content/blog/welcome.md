---
title: '你好，世界'
description: '这个博客的第一篇文章，记录一下它是怎么来的。'
pubDate: '2026-11-08'
---

这是一个用 [Astro](https://astro.build) 搭建的静态博客，托管在 **Cloudflare Pages** 上。

## 它是什么

- 纯静态站点，构建产物在 `dist/`
- 文章放在 `src/content/blog/`，写 Markdown 或 MDX
- 有 RSS、站点地图、语义化 SEO 标签
- 部署后访问：<https://plants13-blog.pages.dev>

## 怎么发新文章

在 `src/content/blog/` 下新建一个 `.md` 文件，开头写上：

```yaml
---
title: '文章标题'
description: '一句话摘要，会用于 SEO 和列表页'
pubDate: '2026-11-08'
---
```

保存后提交到 GitHub，Cloudflare Pages 会自动重新构建并发布。

## 清理模板

`src/content/blog/` 里还留着几篇 Astro 自带的示例文章（first-post、second-post、third-post、markdown-style-guide、using-mdx），确认不需要后可以直接删掉。
