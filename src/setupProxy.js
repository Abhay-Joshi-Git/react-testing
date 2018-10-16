const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', {
		target: 'http://jsonplaceholder.typicode.com',
		changeOrigin: true,
		pathRewrite: {
			'^/api/': ''
		}
	}));
};
