var aresRouteEntry = require('./ares')
var aresScoreRouteEntry  = require('./aresScore')
var aresStoreRouteEntry = require('./aresStore')

var director = require('../director.min')

// 路由配置
var routes = {
    ares: aresRouteEntry,
    aresScore: aresScoreRouteEntry,
    aresStore: aresStoreRouteEntry,
}

var router = director.Router(routes);
//var router = Router(routes);

router.init(['/ares']);
