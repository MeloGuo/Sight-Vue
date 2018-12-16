module.exports = {
  base: '/Sight-Vue/',
  title: 'Sight Vue',
  description: 'Just playing around',
  themeConfig: {
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
          ['/components/button', '按钮']
        ]
      }
    ]
  }
}
