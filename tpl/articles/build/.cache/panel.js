/*TMODJS:{"version":4,"md5":"018f96b0f2d32517712e09da7f8d201b"}*/
template('panel',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,articles=$data.articles,$each=$utils.$each,artcile=$data.artcile,i=$data.i,$out='';$out+='<section class="m-panel"> <div class="m-panel-main-article"> <a href="#/articleDetails" style="background-image:url(';
$out+=$escape(articles[0].picture);
$out+=');"> <div class="m-panel-tips"> <p>';
$out+=$escape(articles[0].title);
$out+='<span class="m-panel-price"><i>¥</i>23.32</span></p> </div> </a> </div> <ul class="m-panel-article-list"> ';
$each(articles,function(artcile,i){
$out+=' ';
if(i >= 1){
$out+=' <li> <a href=""> <p>';
$out+=$escape(artcile.title);
$out+='</p> <img src="';
$out+=$escape(artcile.picture);
$out+='"> </a> </li> ';
}
$out+=' ';
});
$out+=' </ul> <a class="m-panel-btn-tatal" href="javascript:;">查看全部</a> </section>';
return new String($out);
});