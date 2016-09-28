/*TMODJS:{"version":13,"md5":"3377ef9710327bab333a23254db92716"}*/
template('articleDetails',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,post_date=$data.post_date,$each=$utils.$each,tags=$data.tags,tag=$data.tag,i=$data.i,$string=$utils.$string,content=$data.content,$out='';$out+='<a href="" class="ico-home"></a> <div class="artcile-wrapper"> <h1 class="artcile-title">';
$out+=$escape(title);
$out+='</h1> <div class="artcile-top"> <span class="artcile-posted-time">';
$out+=$escape(post_date);
$out+='</span> ';
$each(tags,function(tag,i){
$out+=' <span class="artcile-ico-tag">';
$out+=$escape(tag.name);
$out+='</span> ';
});
$out+=' </div> <div class="artcile-content"> ';
$out+=$string(content);
$out+=' </div> <div class="artcile-bottom"> <img class="app-qrcode" src="img/app-qrcode.png" alt=""> <p> <span class="num1">阅读 1234</span> <span class="num2">244</span> </p> </div> </div> ';
return new String($out);
});