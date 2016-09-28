/*TMODJS:{"version":3,"md5":"b369278c29c8ecaeef0724bd6d278ce4"}*/
template('menu',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,button=$data.button,b=$data.b,i=$data.i,$escape=$utils.$escape,sb=$data.sb,$out='';$out+='<div class="m-footer"> <ul class="m-footer-nav"> <li class="item"> <a href=""></a> </li> ';
$each(button,function(b,i){
$out+=' <li class="item"> <a href="javascript:;">';
$out+=$escape(b.name);
$out+='</a> <div> <ul class="sub-btn-list"> ';
$each(b.sub_button,function(sb,i){
$out+=' <li data-type="';
$out+=$escape(sb.type);
$out+='" data-key="';
$out+=$escape(sb.key);
$out+='" data-url="';
$out+=$escape(sb.url);
$out+='">';
$out+=$escape(sb.name);
$out+='</li> ';
});
$out+=' </ul> </div> </li> ';
});
$out+=' </ul> </div> ';
return new String($out);
});