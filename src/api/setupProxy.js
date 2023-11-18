const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // the path you want to proxy
    createProxyMiddleware({
      target: 'https://qa2.sunbasedata.com',
      changeOrigin: true,
    })
  );
};