const path = require('path')
module.exports = {
  base: '/Sight-Vue/',
  title: 'Sight Vue',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/MeloGuo/Sight-Vue' },
    ],
    displayAllHeaders: false,
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          ['/install/', '安装'],
          ['/getting-started/', '快速上手']
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          ['/components/button', 'Button 按钮'],
          ['/components/input', 'Input 输入框'],
          ['/components/toast', 'Toast'],
          ['/components/grid', 'Grid 栅格'],
          ['/components/layout', 'Layout 布局'],
          ['/components/tabs', 'Tabs 标签'],
          ['/components/popover', 'Popover'],
          ['/components/slides', 'Slides 轮播'],
          ['/components/cascader', 'Cascader'],
          ['/components/collapse', 'Collapse'],
          ['/components/nav', 'Nav 导航']
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}
