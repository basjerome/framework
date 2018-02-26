imgLazy = function () {
	$j("img[data-src]").each(function () {
		var windowPosition = $j(window).scrollTop(),
			windowHeight = $j(window).height(),
			elementPosition = $j(this).offset().top;
		if( elementPosition < (windowHeight + windowPosition) ) {
			$j(this).attr("src", $j(this).attr("data-src"));
			$j(this).removeAttr("data-src");
		}
	});
};