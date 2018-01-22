imgLazy = function () {
	$j("img[data-src]").each(function () {
		var a = $j(window).scrollTop(), b = $j(window).height(), c = $j(this).offset().top;
		if( c < (b + a) ) {
			$j(this).attr("src", $j(this).attr("data-src"));
			$j(this).removeAttr("data-src");
		}
	});
};