$(function() {

     /** 
      * Mobile Nav
 	 *
 	 * Toggle Side Menu - Left or Right
 	 */

	/*// Prepend a mobile icon to the header
	$(".custom-menu-primary").after('<a class="mobile-icon"><i class="fa fa-bars"></i></a>');
	 
    // Append a child-trigger icon
    /*$('.custom-menu-primary .flyouts .hs-item-has-children').prepend('<div class="child-trigger"></div>'); */
    
    /*$('.custom-menu-primary .flyouts .hs-item-has-children').each(function(){
        $(this).prepend('<div class="child-menu-wrapper"><div class="child-trigger"></div></div>');
        $(this).children('.child-menu-wrapper').prepend($(this).children('a'));
    });*/
    /*$('.custom-menu-primary .flyouts .hs-item-has-children').children('a, .child-trigger').wrap('<div class="child-menu-wrapper"></div>'); */
    
	// Prepend a close icon to the menu
	//$(".custom-menu-primary .hs-menu-flow-horizontal>ul").before('<a class="close-icon"><span></span></a>');
	
   //$(".custom-menu-primary .hs-menu-flow-horizontal>ul").before('<div class="mm-header"><a class="mm-prev" style="display: none;">Back</a><span class="mm-title"></span><a class="mm-next" style="display: none;"></a></div>');
    
	// Add body class on mobile icon click
/*$(".mobile-icon, .close-icon").click(function(b){
	$("body").toggleClass("show-mobile-nav ");
        b.stopPropagation()
	});
    
    $('.custom-menu-primary .hs-menu-wrapper > ul li.hs-item-has-children').each(function(){
        var alink = $(this).children('a').attr('href').replace('#');
        var atext = $(this).children('a').text();
        $(this).children('ul').prepend('<li class="dl-back"><a href="javascript:void(0)">Back</a>');
        $(this).prepend('<div class="child-menu-wrapper"><div class="child-trigger"></div></div>');
        $(this).children('.child-menu-wrapper').prepend($(this).children('a'));
    });
    
    $('.custom-menu-primary .hs-menu-flow-horizontal ul li.hs-item-has-children .child-trigger').click(function(){
        $(this).parent().parent().siblings('.hs-item-has-children').removeClass('child-open');
        $(this).parent().parent('.hs-item-has-children').toggleClass('child-open');
        /*event.preventDefault();*/
   /* });*
    $('.dl-back').click(function() {
        $(this).closest('.hs-item-has-children').removeClass('child-open');
    });

   
       
   $("body").click(function() {
       $("body").removeClass("show-mobile-nav ")
   });
   $(".custom-menu-primary").click(function(b) {
       b.stopPropagation()
   });
     
*/
	 
	// Set the menu height to 100% of the document
        function setMenuHeight(){
                if ( $(window).width() <= 1035) {     
                    var height = $('.header-container-wrapper').height() + $('.body-container-wrapper').height() + $('.footer-container-wrapper').height();
                    $(".custom-menu-primary").height(height);
                }   
        }
        $(window).load(function(){
            setTimeout(function(){
                setMenuHeight();
            }, 1500);
        });
        
        $(window).on("resize", setMenuHeight);
	
	// Wrap body contents with a div so the transforms will work
  //  $('body> div').find('script:not(script[type="IN/Share"])').remove().end().wrapAll('<div id="site-wrapper"></div>');
    
    $('#trigger-header-search').click(function( e ){
        e.preventDefault();
        $('.custom-header-search').toggleClass("active");
    });
    
    /*
    $('.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        //$(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });
    $('.child-trigger').click(function() {                 
        $(this).parent().siblings('hs-item-has-children').removeClass('clicked');
        $(this).parent().siblings('hs-item-has-children').siblings('ul').siblings('.hs-menu-wrapper').removeClass('custom-child-open');
        $(this).parent().parent().parent().addClass('custom-child-open');
        $(this).parent().addClass('clicked');
        $('body').addClass('hide-li');    
        $('.mm-header > .mm-prev').toggle();
        getChildTitle();
    }); 
    
    $('a.mm-prev').click(function() {          
        $(this).toggle();
        $('.custom-menu-primary .hs-menu-wrapper').removeClass('custom-child-open');
        $('.custom-menu-primary .hs-menu-wrapper ul > li').removeClass('clicked');
        getChildTitle();
    });

    */
    $('.custom-four-column-to-image .column-group').each(function(){
        if($(this).find('h2').html()==''){
        $(this).hide();
        }
    })
    
     $('.custom-four-column-hover-effect .column-group').each(function(){
        if($(this).find('h2').html()==''){
        $(this).hide();
        }
    })
    
    $(" .widget-type-google_search.custom-google-search form.hs-form input").attr("placeholder", "Search");
        
});

/*
function getChildTitle(){
   if( $('.custom-menu-primary .hs-menu-wrapper').hasClass( "custom-child-open" ) ){
        var title = $('.custom-child-open > ul > li.clicked > a').text();
        $('.mm-header > .mm-title').html(title);
    } 
    else {
        $('.mm-header > .mm-title').html('');
    }
};
*/


$(document).ready(function(){
    $('.custom-four-column-to-image').parent().addClass('team-custom-module');
        $(".team-custom-module").slice(1).each(function(){
        var custom_content = $(this).children('.custom-four-column-to-image').html()
        $('.team-custom-module:first').children('.custom-four-column-to-image').append(custom_content);
        $(this).remove();
    });
    
    $('.custom-three-column-top-image').parent().addClass('custom-three-column-module');
        $(".custom-three-column-module").slice(1).each(function(){
        var custom_content = $(this).children('.custom-three-column-top-image').html()
        $('.custom-three-column-module:first').children('.custom-three-column-top-image').append(custom_content);
        $(this).remove();
    });
    $('.custom-four-column-hover-effect').parent().addClass('custom-three-column-gallery');
        $(".custom-three-column-gallery").slice(1).each(function(){
        var custom_content = $(this).children('.custom-four-column-hover-effect').html()
        $('.custom-three-column-gallery:first').children('.custom-four-column-hover-effect').append(custom_content);
        $(this).remove();
    });
    
    $('.custom-four-column-image-hover-effect').parent().addClass('custom-four-column-image');
        $(".custom-four-column-image").slice(1).each(function(){
        var custom_content = $(this).children('.custom-four-column-image-hover-effect').children('.page-center').html()
        $('.custom-four-column-image:first').children('.custom-four-column-image-hover-effect').children('.page-center').append(custom_content);
        $(this).remove();
    });

});


$(window).load(function(){
    $('.custom-lightbox-slider li.hs_cos_flex-slide-thumb').each(function() {
    var bannerImage = $(this).children('a').children('img').attr('src');
    $(this).css('background-image', 'url(' + bannerImage + ')');
    $(this).children("img").remove();
    });
});