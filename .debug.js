/*! <DEBUG:undefined> */
function anonymous($data,$filename) {'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,banner=$data.banner,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<div class="l-list"> <a href="" class="ico-home"></a> <div class="l-list-banner"> <img class="w100" src="';
$out+=$escape(banner);
$out+='" alt=""> </div> <ul class="l-artcle-list"> ';
include('./articleListList.html',);
$out+=' </ul> </div> ';
return new String($out);}