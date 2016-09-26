$(function(){

	var data = {
		button: [],
		articles: []
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

	// 获取底部菜单
	$.ajax({
		type: 'GET',
		url: 'http://localhost:6330/menus',
		dataType: 'json',
		success: function(data){
			if(data.error == 0){
				data.button = data.data.button;
				var html = template("menu", data);
				$("#container").html(html);
				init();
			}
		}
	});

	function getArticles(key){
		$.ajax({
			type: 'GET',
			url: 'http://localhost:6330/recommendArticle',
			dataType: 'json',
			data: { key: key},
			success: function(data){
				if(data.error == 0){
					data.articles = data.data.articles;
					var html = template("panel", data);
					$(".m-content").append(html);
					$(window).scrollTop(document.documentElement.scrollHeight);
				}
			}
		});	
	}

	// 默认推送
	getArticles("welcomeM");

	
	//文章详情

	// $.ajax({
	// 	type: "GET",
	// 	url: "http://localhost:6330/articleDetail",
	// 	dataType: "json",
	// 	data: '',
	// 	success: function(data){
	// 		if(data.error == 0){
	// 			console.dir(data.data);
	// 			var html = template("tpl-artcile-wrapper", data.data);
	// 			$("#view-page").html(html);
	// 		}
	// 	}
	// });

	// $.ajax({
	// 	type: "GET",
	// 	url: "http://localhost:6330/recommendArticle",
	// 	dataType: "json",
	// 	data: '',
	// 	success: function(data){
	// 		if(data.error == 0){
	// 			console.dir(data.data);
	// 			var html = template("tpl-artcile-guess-you-like", data.data);
	// 			$("#view-page").append(html);
	// 		}
	// 	}
	// });
	
})




























