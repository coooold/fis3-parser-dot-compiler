# [fis3-parser-dot-compiler](https://github.com/coooold/fis3-parser-template)

[doT.js](https://github.com/olado/doT/)是一款高效的JS模板编译引擎。fis3-parser-dot-compiler插件基于[fis3](http://fis.baidu.com)，提供将dot模板文件编译为纯js模板函数的功能。
编译后可以提升前端渲染性能，并且无需引入doT库文件。

##使用方法
在fis.conf中增加以下配置：

	fis.match('*.dot', {
		parser: fis.plugin('dot-compiler', {varname: 'it'}),
		rExt: '.js'
	})

将项目中的dot结尾的文件编译为同名js文件。

例如a.dot：

	    <div class="wrap"> 
			<div class="cate_ranknews" data-js="rank">
				<span class="cate_rankicon"></span>
				<span class="cate_rankmore"><em class="moreicon"></em></span>
				<div cl ass="cate_rankfont">
					<h2>书城排行榜</h2>
					<p>今日男生榜、女生榜、新书榜等{{=it}}个榜更新</p>
				</div>
			</div>
		</div>
		<div class="blank_base"></div>

将会编译为：

	$["a"]=function(it
	/**/) {
	var out=' <div class="wrap"> <div class="cate_ranknews" data-js="rank"><span class="cate_rankicon"></span><span class="cate_rankmore"><em class="moreicon"></em></span><div cl ass="cate_rankfont"><h2>书城排行榜</h2><p>今日男生榜、女生榜、新书榜等'+(it)+'个榜更新</p> </div></div></div><div class="blank_base"></div>';return out;
	}

模板文件名.dot将会被编译成$("模板文件名")的模板函数。

##在网页中使用模板

	//在js文件中导入模板
	@require "./tmpl/tmpl_category_rank_news.dot"

	//渲染
	document.write($["a"](it));
	

##其他
可以配合[fis3-prepackager-dot-compiler](https://www.npmjs.com/package/fis3-prepackager-dot-compiler)，将所有模板文件打包到一个js文件中，便于前端引用。
