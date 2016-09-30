function InfiniteScroll (bottomElem, getPageCb, threshold) {
    this.bottomElem = bottomElem;
    this.cb = getPageCb
    this.threshold = threshold || 40  // 偏离底端的距离阀值
    this.toBottom = $(document).height() - $( this.bottomElem ).offset().top;
    this.scrollListenerBind = this.scrollListener.bind(this)
}


InfiniteScroll.prototype.bind = function(){
    window.addEventListener('scroll', this.scrollListenerBind );
    window.addEventListener('resize', this.scrollListenerBind );
}

InfiniteScroll.prototype.unBind = function(){
    window.removeEventListener('scroll', this.scrollListenerBind );
    window.removeEventListener('resize', this.scrollListenerBind );
}


InfiniteScroll.prototype.scrollNextPage = function(){
    if( this.cb instanceof Function ) {
        this.cb () 
    }
}

InfiniteScroll.prototype.isNearBottom = function(){
    var windowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() - $(window).height();

    return  windowBottomToBottom < this.toBottom + this.threshold 
}

InfiniteScroll.prototype.scrollListener = function(){
    if( this.isNearBottom() ) {
        this.scrollNextPage() 
    }
}



module.exports = InfiniteScroll 
