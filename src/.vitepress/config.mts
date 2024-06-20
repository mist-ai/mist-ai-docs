import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/mist-ai-docs/",
  title: "MIST.AI Documentation",
  description: "Official MIST.AI Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Introduction", link: "/overview/introduction" },
          { text: "Literature Review", link: "/overview/lit-review" },
          { text: "Market Analysis", link: "/overview/market-analysis" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mist-ai/mist-ai-docs" },
    ],
  },
});
