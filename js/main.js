//Плавный переход по якорной ссылке
$(document).ready(function(){
	var $anchorLink = $('.j-anchor-link');

    $anchorLink.on("click", function (e) {
    	var id  = $(this).attr('href'),
            top = $(id).offset().top;
            e.preventDefault();

        $('.j-popup-wrapper').hide();

        $('body,html').animate({scrollTop: top - 70 +'px'}, 500);

    });

});


//popup
$(document).ready(function(){
    var $popupWrapper  = $('.j-popup-wrapper');
    var $link = $('.j-popup-link');

    var popupFunc = function(link,popupWrapper) {
	    link.on('click', function() {
	        popupWrapper.fadeIn(200);
	    });

	    popupWrapper.on('click', function(e) {
	        var $this = $(this);
	        var $popup = $this.find('.j-popup');

	        if (!$(e.target).closest($popup).length) {
	            $this.hide();
	        }
	    })
    }

    popupFunc($link, $popupWrapper);

})

