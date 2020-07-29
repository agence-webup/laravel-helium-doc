const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Laravel-helium',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/agence-webup/laravel-helium',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Getting started',
        link: '/getting-started/requirements',
      },
    ],
    sidebar: [
      {
        title: 'Getting started',
        collapsable: false,
        children: [
          ['/getting-started/requirements','Requirements'],
          ['/getting-started/installation','Installation'],
          ['/getting-started/configuration','Configuration'],
        ]
      },
      {
        title: 'Usage',
        collapsable: false,
        children: [ 
          ['/usage/facades&aliases','Facades & Aliases'],
          ['/usage/breadcrumb','Breadcrumb'],
          ['/usage/header','Header'],
          ['/usage/flash','Flash'],
          ['/usage/layout','Layout'],
         ]
      },
      {
        title: 'CRUD Generator',
        collapsable: false,
        children: [ 
          ['/crud/','Usage'],
         ]
      },
      {
        title: 'Modules',
        collapsable: false,
        children: [ 
          ['/modules/redirections','Redirections'],
          ['/modules/settings','Settings'],
          ['/modules/contact','Contact'],
         ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
