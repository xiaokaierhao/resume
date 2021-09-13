const moment = require('moment');

module.exports = {
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).format('LLLL')
        }
      }
    ]
  ],
  themeConfig: {
    logo: 'assets/img/mi.jpg',
    title: '小锴的个人简历',
    sidebar: [
      '',
      'about'
    ],
    lastUpdated: '更新时间',
    nav: [
      { text: '首页', link: '/' },
      { text: '个人简历', link: '/about/' },
      // { text: 'External', link: 'https://google.com' },
    ]
  }
  }