module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat');

    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .tap((options) => {
    //     return {
    //       ...options,
    //       compilerOptions: {
    //         compatConfig: {
    //           MODE: 2,
    //         },
    //       },
    //     };
    //   });
  },
  pwa: {
    name: 'Web application for websites.karpolan.com',
    short_name: 'websites.karpolan.com',
    start_url: '/',
    display: 'standalone',
    manifestPath: 'site.webmanifest',
    themeColor: '#ffffff',
    msTileColor: '#00aba9',
    iconPaths: {
      favicon32: 'img/favicon/favicon-32x32.png',
      favicon16: 'img/favicon/favicon-16x16.png',
      appleTouchIcon: 'img/favicon/apple-touch-icon.png',
      maskIcon: 'img/favicon/safari-pinned-tab.svg',
      msTileImage: 'img/favicon/mstile-150x150.png',
    },
  },
};
