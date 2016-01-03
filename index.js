var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('dist/index.html')).listen(process.env.PORT || 5000)