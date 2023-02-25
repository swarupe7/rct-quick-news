const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
        
      target: "https://newsapi.org/v2/top-headlines?country=us&pageSize=21&sortBy=trending&apiKey=00451f2d4a81423db8eab6400f984f89",
      changeOrigin: true,
    })
  );
};