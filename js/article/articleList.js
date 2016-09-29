var articleListTpl = require('../../tpl/articles/articleList.html');

var articleListListTpl = require('../../tpl/articles/articleListList.html')

function ArticleList (key){
    this.key = key
    this.firstRender = true 
    this.totalData = null // 获取的总数据
    this.data = null   // 一次获取的数据
    this.curPage = 0
}


ArticleList.prototype.getKey = function(){
    return this.key
}

ArticleList.prototype.init = function(){
    this.firstRender = true 

    if( ! this.data ) {
        this.getMoreData()        
        this.curPage ++
    } else {
        this.render() 
    }
}

ArticleList.prototype.getData = function(page, _limit){
    var url = URL_PREFIX + '/index.php';
    var limit = _limit || 10

    var urlObj = {
        type: 'all',
        controller: 'article', 
        action: 'lists',
        page: page, 
        limit: limit,
    }
    var mv = this
    $.getJSON( url, urlObj, function(data){
        if(data.error == 0){
            mv.transformData( data.data  )
            mv.render() 
        }
    })
}

ArticleList.prototype.transformData = function(data){
    this.data = data
}

ArticleList.prototype.render = function(){
    if (!this.data ) {
        return  
    }

    var html 
    if( this.firstRender ) {
       this.totalData = this.data 
       html = articleListTpl ( this.data );
       $("#view-page").html(html);

       this.firstRender = false
    } else {
        html = articleListListTpl ( this.data.articles  );
        $(".l-artcle-list").append(html);

        this.totalData.articles = this.totalData.articles.concat( this.data.articles ) 
    }
}

ArticleList.prototype.getMoreData = function(){
    this.getData( this.curPage )        
    this.curPage ++
}

function articleListRouteEntry (key){
    // TODO key 为null  跳转的到menu页
    if( ! key ) {
        return  
    }

    if( ! gData.articleList || gData.articleList.getKey() !== key ) {
        gData.articleList =  new ArticleList(key)
    } 

    gData.articleList.init()
}

module.exports = articleListRouteEntry 
