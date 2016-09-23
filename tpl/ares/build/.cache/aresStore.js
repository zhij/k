/*TMODJS:{"version":15,"md5":"d0ba98994335c2ed29d37bd8edaf01bf"}*/
template('aresStore',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,_view=$data._view,$each=$utils.$each,item=$data.item,type=$data.type,stores=$data.stores,i=$data.i,$out='';$out+='<div> <a class="ico-home"></a> <div class="b-title"> <div class="b-title-d"> <span id="js-title" class="dropdown dropdown2"> ';
$out+=$escape(_view.currentType);
$out+=' </span> <div id="j-dropdown" class="j-dropdown"> <ul> ';
$each(_view.type,function(item,type){
$out+=' <li data-type=';
$out+=$escape(type);
$out+='> ';
$out+=$escape(item);
$out+='</li> ';
});
$out+=' </ul> </div> </div> 商家 </div> <div class=""> <div id="container-table-businesses"></div> </div> </div> <div class="table-list"> ';
$each(stores,function(item,i){
$out+=' <div class="table-item"> <div class="col1">';
$out+=$escape(i+1);
$out+='</div> <div class="col2">';
$out+=$escape(item.store_name);
$out+='</div> ';
if(item.up_or_down === 'up' ){
$out+=' <div class="col3 up"> ';
$out+=$escape(item.proportion);
$out+=' </div> ';
}else{
$out+=' <div class="col3"> ';
$out+=$escape(item.proportion);
$out+=' </div> ';
}
$out+=' </div> ';
});
$out+=' </div> ';
return new String($out);
});