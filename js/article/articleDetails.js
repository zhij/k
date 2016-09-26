function articleDetailsRouterEntry(){
	$(window).scrollTop(0);
	$.ajax({
		type: "GET",
		url: "http://localhost:6330/articleDetail",
		dataType: "json",
		data: '',
		success: function(data){
			if(data.error == 0){
				console.dir(data.data);
				var html = template("articleDetails", data.data);
				$("#view-page").html(html);
			}
		}
	});	

	$.ajax({
		type: "GET",
		url: "http://localhost:6330/recommendArticle",
		dataType: "json",
		data: '',
		success: function(data){
			if(data.error == 0){
				console.dir(data.data);
				var html = template("articleRecommend", data.data);
				$("#view-page").append(html);
			}
		}
	});
}

module.exports = articleDetailsRouterEntry;
