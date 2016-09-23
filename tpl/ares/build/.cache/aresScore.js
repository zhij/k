/*TMODJS:{"version":2,"md5":"f32555614321ceb6427582939cab2304"}*/
template('aresScore',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,new_stores_num=$data.new_stores_num,heat=$data.heat,proportion=$data.proportion,beat_ratio=$data.beat_ratio,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},one_heat=$data.one_heat,two_heat=$data.two_heat,three_heat=$data.three_heat,$out='';$out+='<div> <a class="ico-home"></a> <div class="r-h1">拓展店数：<span class="r-h1-num">';
$out+=$escape(new_stores_num);
$out+='间</span></div> <div class="r-h2"><span class="r-h2-num1 up">共';
$out+=$escape(heat);
$out+='°C</span><span class="r-h2-num2">占比';
$out+=$escape(proportion);
$out+='%</span></div> <div class="r-h3">击败全国<span class="r-h3-num">';
$out+=$escape(beat_ratio);
$out+='%</span>的战神</div> ';
include('./ares');
$out+=' <div class="r-title">队内热度占比</div> <div class="circle-group"> <div class="circle-wp mr"> <div class="circle circle_1"> <div class="pie_left"><div class="left"></div></div> <div class="pie_right"><div class="right"></div></div> <div class="mask"><i>1°C</i><span>';
$out+=$escape(one_heat.ratio);
$out+='</span>%</div> <div class="des"> <p class="p2">';
$out+=$escape(one_heat.number);
$out+='°C</p> <p class="p1">在队内排第';
$out+=$escape(one_heat.rank);
$out+='</p> </div> </div> </div> <div class="circle-wp fl"> <div class="circle circle_2"> <div class="pie_left"><div class="left"></div></div> <div class="pie_right"><div class="right"></div></div> <div class="mask"><i>2°C</i><span>';
$out+=$escape(two_heat.ratio);
$out+='</span>%</div> <div class="des"> <p class="p2">';
$out+=$escape(two_heat.number);
$out+=' °C</p> <p class="p1">在队内排第';
$out+=$escape(two_heat.rank);
$out+='</p> </div> </div> </div> <div class="circle-wp fr"> <div class="circle circle_3"> <div class="pie_left"><div class="left"></div></div> <div class="pie_right"><div class="right"></div></div> <div class="mask"><i>3°C</i><span>';
$out+=$escape(three_heat.ratio);
$out+='</span>%</div> <div class="des"> <p class="p2">';
$out+=$escape(three_heat.number);
$out+=' °C</p> <p class="p1">在队内排第';
$out+=$escape(three_heat.rank);
$out+='</p> </div> </div> </div> </div> </div> ';
return new String($out);
});