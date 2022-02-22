module.exports = {
  title: 'LittlePig\'s Blogs',
  description: 'study day by day',
  base: '/',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'LittlePig\'s Blogs',
        items: [
          { text: 'Github', link: 'https://github.com/hezygo' },
        ]
      }
    ],
    sidebar: [
      {
        title: 'Welcome to LittlePig\'s world',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "To learn vuepress", path: "/" }
        ]
      },
      {
        title: "Study",
        path: '/python/HelloWorld',
        collapsable: true, // 折叠
        children: [
          { title: "Hello World", path: "/python/HelloWorld" },
          { title: "Import module", path: "/python/ImportModule" }
        ],
      },
      {
        title: "Picture",
        path: '/wxpic/TestFirstFastAPI',
        collapsable: true, // 折叠
        children: [
          { title: "表情包", path: "/wxpic/TestFirstFastAPI" },
          { title: "身材壁纸", path: "/wxpic/iPhone" },
          { title: "抖音壁纸", path: "/wxpic/NicePic" },
          { title: "个性壁纸", path: "/wxpic/Sao" },
          { title: "iPhone壁纸", path: "/wxpic/Wallpaper" },
          { title: "渣男壁纸", path: "/wxpic/WangZhe" },
	  { title: "不一样的表情包", path: "/wxpic/reserv"}
        ],
      }
    ]
  },
  plugins: [
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功"
      }
    }]
  ],
  markdown: {
    // 用来解决 标签问题
    extendMarkdown: md => {
      // Remember old renderer, if overridden, or proxy to default renderer
      var defaultRender = md.renderer.rules.image || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

      md.renderer.rules.image = function (tokens, idx, options, env, self) {
        // If you are sure other plugins can't add `target` - drop check below
        var aIndex = tokens[idx].attrIndex('referrerPolicy');

        if (aIndex < 0) {
          tokens[idx].attrPush(['referrerPolicy', 'no-referrer']); // add new attribute
        } else {
          tokens[idx].attrs[aIndex][1] = 'no-referrer';    // replace value of existing attr
        }

        // pass token to default renderer.
        return defaultRender(tokens, idx, options, env, self);
      };
    }
  }
};


