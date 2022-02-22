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
  head: [
    // // [
    // //   'script', // js 文件
    //   // { type: 'text/javascript', src: '/js/wx_pic.js'},
    // //   { type: 'text/javascript', src: '/js/new_wx_pic.js'}
    // // ]
    ['script', {id: "scriptImporter"}, `
        (function() { 
        var script = document.createElement("script"); 
        script.src = "/js/wx_pic.js";
        setTimeout(() => document.body.append(script))
        })(); 
    `]
  ],
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
        ],
      }
    ]
  }
}
