var data = {
	button: [],
	articles: []
}
data.button = [
	{
	    "name":"考拉动态",
	    "sub_button":[
	        {
	            "type":"click", // type 为click, 前端做的一些操作
	            "name":"公司动态",
	            "key": "companyStateM",
	        },
	        {
	            "type":"click", 
	            "name":"产品动态",
	            "key": "productStateM",
	        },
	        {
	            "type":"click", 
	            "name":"同行动态",
	            "key": "peerCompanyStateM",
	        },
	    ]
	},
	{
	    "name":"武林秘笈",
	    "sub_button":[
	        {
	            "type":"click", // type 为click, 前端做的一些操作
	            "name":"最新案例",
	            "key": "newCaseM",
	        },
	        {
	            "type":"click", 
	            "name":"培训",
	            "key": "trainM",
	        },
	        {
	            "type":"click", 
	            "name":"话术",
	            "key": "speechcraftM",
	        },
	        {
	            "type":"click", 
	            "name":"热门活动",
	            "key": "hotActivityM",
	        },
	        {
	            "type":"click", 
	            "name":"行业方案",
	            "key": "industrySolutionsM",
	        },
	        {
	            "type":"click", 
	            "name":"相关硬件",
	            "key": "relatedHardwareM",
	        },
	    ]
	},
	{
	    "name":"战绩排名",
	    "sub_button":[
	        {
	            "type":"view",    //type为view, 直接点击url跳转
	            "name":"我的战绩",
	            "url":"http://v.qq.com/"
	        },
	        {
	            "type":"view",    
	            "name":"我的商家",
	            "url":"http://v.qq.com/"
	        },
	        {
	            "type":"view",    
	            "name":"我的战队",
	            "url":"http://v.qq.com/"
	        },
	        {
	            "type":"click", 
	            "name":"名人堂",
	            "key": "hallOfFameM",
	        },
	    ]
	}
]
data.articles = [
	{
		article_id: '', 
		type: 'article',  
		title: '人物志| 众神退让，KBA最萌战神新鲜出炉!',  
		picture: 'img/banner1.jpg', 
		link: '', 
		post_date: '', 
	},
	{
		article_id: '', 
		type: 'article',  
		title: '人物志| 众神退让，KBA最萌战神新鲜出炉!',  
		picture: 'img/artcle-pic.jpg', 
		link: '', 
		post_date: '', 
	},
	{
		article_id: '', 
		type: 'article',  
		title: '小小粮油店暴涨3000粉丝的秘诀竟然是这个！',  
		picture: 'img/artcle-pic.jpg', 
		link: '', 
		post_date: '', 
	}
]
var html = template("tpl-footer-nav", data);
$("#container").html(html);

var html1 = template("tpl-panel", data);
$("#js-m-content").html(html1);

$(function(){
	function hideMenuItem(){
		$(".m-footer-nav .item").children("div").hide();
	}

	$(document).click(hideMenuItem);

	$(".m-footer-nav .item").click(function(e){
		e.stopPropagation();
		$(this).children("div").show();
		$(this).siblings(".item").children("div").hide();
	});

	$(".sub-btn-list li").click(function(e){
		e.stopPropagation();
		reqLists();
	})

	function reqLists(){
		hideMenuItem();
		var html = template("tpl-panel", data);
		$(".m-content").append(html);
		$(window).scrollTop(document.documentElement.scrollHeight)
	}
})