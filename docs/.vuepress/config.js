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
    // [
    //     'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
    //     { rel: 'icon', href: '/images/logo.png' }
    // ],
    [
        'script', // js 文件
        { src: '/js/wx_pic.js' }
    ]
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
          { title: "Hello World", path: "/python/HelloWorld" }
        ],
      },
      {
        title: "Picture",
        path: '/picture/TestFirstFastAPI',
        collapsable: true, // 折叠
        children: [
          { title: "表情包", path: "/picture/TestFirstFastAPI" }
        ],
      }
    ]
  }
}
