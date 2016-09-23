var data = {
	key: '',
	banner: 'img/l-banner.jpg',
	articles: [
		{
			article_id: '', //文章ID
			type: 'article',  //类型, 'article'文章信息
			title: '这个女人竟比《欢乐颂c》的女主们还受欢迎？猪肉西施揭露成为我特么也不知',  //文章标题
			picture: 'img/artcle-pic.jpg', // 文章图片
			link: '#', // 外链, 这里不需要
			post_date: '2016年8月30日', // 文章发布时间
		},
		{
			article_id: '', //文章ID
			type: 'link',  //类型, 'link'跳转链接
			title: '这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章',  //文章标题
			picture: 'img/artcle-pic.jpg', // 文章图片
			link: 'http://www.baidu.com', // 外链, 这里需要
			post_date: '2016年8月29日', // 文章发布时间
		},
		{
			article_id: '', //文章ID
			type: 'article',  //类型, 'article'文章信息
			title: '这个女人竟比《欢乐颂c》的女主们还受欢迎？猪肉西施揭露成为我特么也不知',  //文章标题
			picture: 'img/artcle-pic.jpg', // 文章图片
			link: '#', // 外链, 这里不需要
			post_date: '2016年8月30日', // 文章发布时间
		},
		{
			article_id: '', //文章ID
			type: 'link',  //类型, 'link'跳转链接
			title: '这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章',  //文章标题
			picture: 'img/artcle-pic.jpg', // 文章图片
			link: 'http://www.baidu.com', // 外链, 这里需要
			post_date: '2016年8月29日', // 文章发布时间
		},
		{
			article_id: '', //文章ID
			type: 'article',  //类型, 'article'文章信息
			title: '这个女人竟比《欢乐颂c》的女主们还受欢迎？猪肉西施揭露成为我特么也不知',  //文章标题
			picture: 'img/artcle-pic.jpg', // 文章图片
			link: '#', // 外链, 这里不需要
			post_date: '2016年8月30日', // 文章发布时间
		},
		{
			article_id: '', //文章ID
			type: 'link',  //类型, 'link'跳转链接
			title: '这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章这是一个外链文章',  //文章标题
			picture: 'img/artcle-pic.jpg', // 文章图片
			link: 'http://www.baidu.com', // 外链, 这里需要
			post_date: '2016年8月29日', // 文章发布时间
		}
	]
}

var html = template('tpl-artcle-list',data);
$('#container').html(html);
setTimeout(function(){
	var height = $('.l-list-banner').height()+'px';
		$('.l-artcle-list').css("paddingTop",height);
		console.log(height)
},1000);
