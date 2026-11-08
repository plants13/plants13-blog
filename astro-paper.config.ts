import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://plants13.neorizon.xyz/",
    title: "plants13 的博客",
    description: "写点代码，记点东西。",
    author: "plants13",
    profile: "https://github.com/plants13",
    ogImage: "default-og.jpg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 5,
    perIndex: 5,
  },
  features: {
    lightAndDarkMode: true,
    // 关闭动态 OG 图：它依赖字体文件做 satori 渲染，本站改用 public/default-og.jpg
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/plants13/plants13-blog/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/plants13" },
    { name: "mail", url: "mailto:plants13@163.com" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
