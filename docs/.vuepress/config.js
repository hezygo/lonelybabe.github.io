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
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'LittlePig\' Blogs',
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
        collapsable: true, // 不折叠
        children: [
          { title: "Hello World", path: "/python/HelloWorld" }
        ],
      }
    ]
  }
}
