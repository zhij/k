/*TMODJS:{"version":1,"md5":"8cc1439f7a43474f5b93daac422efaea"}*/
template('articleRecommend',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,articles=$data.articles,artcle=$data.artcle,i=$data.i,$escape=$utils.$escape,$out='';$out+='<div class="artcile-guess-title"> <span>推荐文章／别再错过</span> <div class="hr"></div> </div> <div class="artcile-guess-you-like"> <ul class="artcile-guess-you-like-list"> ';
$each(articles,function(artcle,i){
$out+=' <li> <a href=""> <div class="l-artcle-list-info"> <p>';
$out+=$escape(artcle.title);
$out+='</p> </div> <img src="';
$out+=$escape(artcle.picture);
$out+='"> </a> </li> ';
});
$out+=' </ul> </div>';
return new String($out);
});