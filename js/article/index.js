var menuRouteEntry = require('./menu')
var articleDetailsRouteEntry = require('./articleDetails')
var articleListRouteEntry = require('./articleList')

// 路由配置
var routes = {
    '/menu': menuRouteEntry,
    '/articleDetails': articleDetailsRouteEntry,
    '/articleList/:key' : articleListRouteEntry,
}

gRouter = Router(routes);
gRouter = gRouter.init(['/menu']);

gRouter.on('after', 'articleList/:key', function(){
    console.log('leave articleList/:key')
    gData.articleList.unBind()
})

//gRouter.on('after', '/menu', function(){
    //console.log('leave menu')
//})
//p
