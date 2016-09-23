/*TMODJS:{"version":2,"md5":"173735a4f52b6d828b65b74f87c887c7"}*/
template('ares',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,rank=$data.rank,partner_name=$data.partner_name,employee_sn=$data.employee_sn,employee_name=$data.employee_name,employee_avatar=$data.employee_avatar,development=$data.development,leadership=$data.leadership,influence=$data.influence,$each=$utils.$each,starts=$data.starts,$value=$data.$value,$index=$data.$index,$out='';$out+='<div class="show-bg up"> <div class="no">';
$out+=$escape(rank);
$out+='</div> <div class="name">';
$out+=$escape(partner_name + ' ' + employee_sn + ' '+ employee_name);
$out+=' </div> <img class="header" src="';
$out+=$escape(employee_avatar);
$out+='"> <div class="pro-group"> <div class="pro-item"> <label>';
$out+=$escape(development);
$out+='</label> <div class="pro-bg"> <div class="pro"></div> <div class="pro-line"></div> </div> </div> <div class="pro-item"> <label>';
$out+=$escape(leadership);
$out+='</label> <div class="pro-bg"> <div class="pro"></div> <div class="pro-line"></div> </div> </div> <div class="pro-item"> <label>';
$out+=$escape(influence);
$out+='</label> <div class="pro-bg"> <div class="pro"></div> <div class="pro-line"></div> </div> </div> </div> <div class="star-group"> ';
$each(starts,function($value,$index){
$out+=' <img src="img/ico-star.png"> ';
});
$out+=' </div> </div> <img class="show-bg-bottom" src="img/show-bg-bottom.png"> <div class="i-button-group"> <a class="btn" href="">我是谁</a> <a class="btn" href="">秘&nbsp;&nbsp;笈</a> </div> <div class="line1"></div> <div class="line2"></div> <div class="line3"></div> <div class="line4"></div> <div class="line5"></div> <div class="line6"></div> ';
return new String($out);
});