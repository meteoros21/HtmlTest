$(document).ready(function() {

	// 서브탭
	function f_tab() {
		$('.tabs-ui li a').on('click', function(e) {
			var tg = $(this).attr('href');
			$('.tabs-cont .cont' + tg).show().siblings().hide();
			$(this).parent('li').addClass('active').siblings().removeClass('active');
			e.preventDefault();
		});
	}
	f_tab();

});



