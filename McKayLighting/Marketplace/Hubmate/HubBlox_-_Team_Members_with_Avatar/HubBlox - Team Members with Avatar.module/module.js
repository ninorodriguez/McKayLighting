(function($) {

$(document).ready(function() {
  
  	// LIGHTBOX
    $('.blox_team-members-av').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.popup-with-zoom-anim', // the selector for gallery item
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in',
            gallery: {
              enabled:true
            }
        });
    });
    
});
  
})(jQuery);