/*TMODJS:{"version":1,"md5":"9247de5fa156c77309cee18f78f31267"}*/
template('businesses',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,item=$data.item,i=$data.i,$escape=$utils.$escape,$out='';$out+='<!DOCTYPE html> <html lang="zh-cmn-Hans"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" /> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="apple-mobile-web-app-capable" content="yes" /> <meta name="apple-mobile-web-app-status-bar-style" content="black" /> <meta name="format-detection" content="telephone=no, email=no" /> <title></title> <link rel="stylesheet" type="text/css" href="css/style.css"> </head> <body class="bg000"> <div> <a class="ico-home"></a> <div class="b-title"> <div class="b-title-d"> <span id="js-title2" class="dropdown dropdown2">我帮助的</span> <div id="j-dropdown2" class="j-dropdown"> <ul> <li>我帮助的</li> <li>需要帮助的</li> </ul> </div> </div> 商家 </div> <div class=""> <div id="container-table-businesses"></div> </div> </div> <script id="js-table-businesses" type="text/html"> <div class="table-list"> ';
$each(list,function(item,i){
$out+=' <div class="table-item"> <div class="col1">';
$out+=$escape(i+1);
$out+='</div> <div class="col2">';
$out+=$escape(item.name);
$out+='</div> ';
if(item.isUp){
$out+=' <div class="col3 up"> ';
}else{
$out+=' <div class="col3"> ';
}
$out+=' ';
$out+=$escape(item.num);
$out+='</div> </div> ';
});
$out+=' </div> </script> <script type="text/javascript" src="js/jquery.min.js"></script> <script type="text/javascript" src="js/template.js"></script> <script type="text/javascript"> var data = { list: [ { name: "芙蓉兴盛", num: \'+4.56%\', isUp: true }, { name: "芙蓉兴盛2", num: \'+4.56%\', isUp: true }, { name: "芙蓉兴盛3", num: \'-4.56%\', isUp: false }, { name: "芙蓉兴盛4", num: \'+14.56%\', isUp: true }, { name: "芙蓉兴盛5", num: \'-4.56%\', isUp: false } ] } var html = template(\'js-table-businesses\',data); document.getElementById(\'container-table-businesses\').innerHTML = html; $(".dropdown").click(function(e){ e.stopPropagation(); $(\'.j-dropdown\').hide(); $(this).next(".j-dropdown").show(); }); $(\'.j-dropdown li\').click(function(e){ e.stopPropagation(); $(this).parents(".j-dropdown").prev(".dropdown").text($(this).text()); $(\'.j-dropdown\').hide(); }); $(document).click(function(e){ e.stopPropagation(); $(\'.j-dropdown\').hide(); }); </script> </body> </html> ';
return new String($out);
});