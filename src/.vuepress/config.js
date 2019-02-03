module.exports = {
  locales: {
    '/': {
      lang: 'ja',
      title: "fagahhe2645/blog",
      description: "fagahhe2645's blog",
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/blog/' }
    ],
    sidebar: [
      {
        title: 'Blog',
        children: [
          '/blog/'
        ]
      }
    ]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' }],
    ['meta',{ name:"keywords", content:"vuepress, netlify"}],
    ['meta',{ name:"og:title", content:"og title"}],
    ['meta',{ name:"og:description", content:"description"}],
    ['meta',{ name:"og:type", content:"website"}],
    ['meta',{ name:"og:url", content:"og　url"}]
  ]
}
