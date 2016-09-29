var menuRouteEntry = require('./menu')
var articleDetailsRouteEntry = require('./articleDetails')
var articleListRouteEntry = require('./articleList')

// 路由配置
var routes = {
    '/menu': menuRouteEntry,
    'articleDetails': articleDetailsRouteEntry,
    'articleList/:key' : articleListRouteEntry,
}

gRouter = Router(routes);
gRouter.init(['/menu']);

