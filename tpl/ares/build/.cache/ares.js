/*TMODJS:{"version":5,"md5":"25c2a86611b26a0e44c60b78ca86fd9d"}*/
template('ares',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<div class="center" > ';
include('./aresCommon');
$out+=' <img class="show-bg-bottom" src="img/show-bg-bottom.png"> <div class="i-button-group"> <a class="btn" href="">我是谁</a> <a class="btn" href="">秘&nbsp;&nbsp;笈</a> </div> <div class="line1"></div> <div class="line2"></div> <div class="line3"></div> <div class="line4"></div> <div class="line5"></div> <div class="line6"></div> </div> ';
return new String($out);
});