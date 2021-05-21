module.exports = {
  env: {
    MAIN_URL: process.env.NODE_ENV === 'production' ? process.env.PROD_URL : process.env.DEV_URL,
    MAIN_REST_API:
      process.env.NODE_ENV === 'production' ? process.env.PROD_REST_API : process.env.DEV_REST_API,
    MAIN_MENU_API:
      process.env.NODE_ENV === 'production' ? process.env.PROD_MENU_API : process.env.DEV_MENU_API,
    isProd: process.env.NODE_ENV === 'production' ? true : false,
  },
  images: {
    // loader: 'imgix',
    domains: ['localhost', '192.168.1.3', 'test.kote2.co'],
  },
};
