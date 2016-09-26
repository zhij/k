/*TMODJS:{"version":4,"md5":"bbaa247fc0cd7dba4a90707080cb7a11"}*/
template('aresCommon',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,rank=$data.rank,partner_name=$data.partner_name,employee_sn=$data.employee_sn,employee_name=$data.employee_name,employee_avatar=$data.employee_avatar,development=$data.development,leadership=$data.leadership,influence=$data.influence,$each=$utils.$each,stars=$data.stars,$value=$data.$value,$index=$data.$index,$out='';$out+='<div class="show-bg up" > <div class="no">';
$out+=$escape(rank);
$out+='</div> <div class="name">';
$out+=$escape(partner_name + ' ' + employee_sn + ' '+ employee_name);
$out+=' </div> <img class="header" src="';
$out+=$escape(employee_avatar);
$out+='"> <div class="pro-group"> <div class="pro-item"> <label>开拓力</label> <div class="pro-bg "> <div class="pro" style="width:';
$out+=$escape(development);
$out+='%"></div> <div class="pro-line"></div> </div> </div> <div class="pro-item"> <label>领导力</label> <div class="pro-bg" > <div class="pro" style="width:';
$out+=$escape(leadership);
$out+='%"></div> <div class="pro-line"></div> </div> </div> <div class="pro-item"> <label>影响力</label> <div class="pro-bg" > <div class="pro" style="width:';
$out+=$escape(influence);
$out+='%"></div> <div class="pro-line"></div> </div> </div> </div> <div class="star-group"> ';
$each(stars,function($value,$index){
$out+=' <img src="img/ico-star.png"> ';
});
$out+=' </div> </div> ';
return new String($out);
});