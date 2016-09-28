var menuRouteEntry = require('./menu')
var articleDetailsRouterEntry = require('./articleDetails')

// 路由配置
var routes = {
    menu: menuRouteEntry,
    articleDetails: articleDetailsRouterEntry,
}
var router = Router(routes);
router.init(['/menu']);

