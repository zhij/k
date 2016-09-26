var data = {
	button: null,
	sections: [],
	articles: null
}

function init(){

	// 底部菜单
	$(".m-footer-nav .item").click(function(e){
		e.stopPropagation();
		$(this).children("div").show();
		$(this).siblings(".item").children("div").hide();
	});

	// 底部 子菜单
	$(".sub-btn-list li").click(function(e){
		e.stopPropagation();
		var key = $(this).attr("data-key");
		hideMenuItem();
		getArticles(key);
	})


	function hideMenuItem(){
		$(".m-footer-nav .item").children("div").hide();
	}

	$("html").click(hideMenuItem);
}


function getArticles(key){
	$.ajax({
		type: 'GET',
		url: 'http://localhost:6330/recommendArticle',
		dataType: 'json',
		data: { key: key},
		success: function(res){
			if(res.error == 0){
				data.sections.push( { articles: res.data.articles } )
				renderArticles();
			}
		}
	});	
}

function renderArticles(){
	if(data.sections.length ){
		var html = ''
		data.sections.forEach(function(item){
			html += template("panel", item)
		})
		$(".m-content").html(html);
		$(window).scrollTop(document.documentElement.scrollHeight);
	}
}

function renderMenus(){
	if(data.button){
		var html = template("menu", data);
		$("#container").html(html);
		init();
	}
}

// 默认推送
getArticles("welcomeM");

function getMenus(){
	// 获取底部菜单
	$.ajax({
		type: 'GET',
		url: 'http://localhost:6330/menus',
		dataType: 'json',
		success: function(res){
			if(res.error == 0){
				data.button = res.data.button;
				renderMenus();
			}
		}
	});
}

getMenus();


function menuRouteEntry(){
	$("#view-page").html('<div class="m-content" id="js-m-content"></div><div id="container"></div>');
	renderMenus();
	renderArticles();
}






module.exports = menuRouteEntry;





