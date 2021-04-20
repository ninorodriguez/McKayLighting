$(function() {

    /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

    $('.custom-menu-primary').addClass('js-enabled');
    
    /* Mobile button with three lines icon */
        $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><i></i></div>');
        
    /* Uncomment for mobile button that says 'MENU' 
        $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger">MENU</div>');
    */
    
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
     });

    $('.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });
    
    
    
    /** 
     * Banner Image
     *
     */
    
    /* Grabs the Image Module SRC and sets it as the container background image using inline css */
    
    var $banner = $('.banner');
    var bannerImage = $banner.find('.banner-image img').attr('src');
    $banner.append('<div class="color-overlay"></div>')
    $banner.css('background-image', 'url(' + bannerImage + ')');
    $banner.find('.banner-image').empty();
    
    /* Parallax Effect for banner image */
    
    var $window = $(window);
    
    function parallax(){
      var scrolled = $window.scrollTop();
      $banner.css('background-position','center ' + (scrolled*0.4) + 'px');
    }
    
    $window.scroll(function(e){
      if($window.width() > 767){
        parallax();
      }
    });
    
    
    
    
    /** 
     * Back to Top
     */
    
    var $backToTop = $(".back-to-top");
    $backToTop.hide();
    
    $(window).scroll(function() {
        if ($(this).scrollTop()>50) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });
    
    $backToTop.find("a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 500);
    });
    
    
    
    /** 
     * Tabber
     */
    
    // Hide all panes initially except for the first 'active' one
    $(".tab-pane").not(".active").hide();
    
    // Loop through all the tabber panes
    $('.tabber-content .tab-pane').each(function(i, el){
       
       // Set the ID
       $(el).attr("id", "tab-" + i);
       
    });
    
    // Loop through all the tabber anchors
    $(".tabber-tabs a").each(function(i, el){
        
        // Set HREF Using the Index
        $(el).attr("href", "#tab-" + i);
        
        // Variable for the Pane ID based on the HREF
        var ID = $(el).attr("href");
    
        // Click Function
        $(this).click(function(e){
    		
            // Prevent default functionality of the anchor
    		e.preventDefault();
    
            // If the parent LI does not have the active class
    		if(!$(this).parent().hasClass("active")){
                
                // Give the parent LI the active state styles and hide all other panes
    			$(this).parent().addClass("active").siblings().removeClass("active");
                
                // Fade in the corresponding pane and hide all other panes
    			$(ID).fadeIn().siblings().hide();
    		}
    	});
    
    });
    
    
    
    /** 
     * Accordion
     */
     
    var $accordion = $('.accordion');

    // Initially hide all accordion content
    $accordion.find('.accordion_content').hide();
    // Initially display the accordion content with .expanded class
    $accordion.find('.accordion_group.expanded .accordion_content').show();

    $accordion.find('.accordion_header').click(function(){

        // Hide the displayed sibling accordion content so only one appears at a time
       $accordion.find(".accordion_header").not(this).parent(".accordion_group.expanded").removeClass('expanded').children('.accordion_content').stop(true,true).slideUp();

        if(!$(this).parent('.accordion_group').hasClass('expanded')){
            // Display the accordion content if it is not displayed
            $(this).parent(".accordion_group").addClass('expanded').children('.accordion_content').stop(true,true).slideDown();
        }
        else{
            // Hide the accordion content if it is displayed
            $(this).parent(".accordion_group").removeClass('expanded').children('.accordion_content').stop(true,true).slideUp();
        }
    });
    
    
    
    /** 
     * Well Module Close Button
     */
     
    $("#well .close").click(function(){
        $(this).parent("#well").fadeOut();
    }); 



}); /* End of Document Ready */



/** 
 * Short Codes
 */

new Shortcode(document.querySelector('body'), {
  fa: function() {
    var icon = this.options.icon;
    var color = this.options.color;
    var size = this.options.size;
    
    switch(size){
        case 'xxs':
        size = "14px";
        break;
        
        case 'xs':
        size = "18px";
        break;
        
        case 's':
        size = "24px";
        break;
        
        case 'm':
        size = "30px";
        break;
        
        case 'l':
        size = "34px";
        break;
        
        case 'xl':
        size = "44px";
        break;
        
        case 'xxl':
        size = "64px";
        break;
    }
    
      var output = '<i class="fa fa-' + icon + '" style="font-size: ' + size + '; color: ' + color +';"></i>';
    return output;
  },
  
  button: function() {
    var text = this.options.text;
    var icon = this.options.icon;
    var url = this.options.url;
    
      var output = '<a class="button" href="' + url + '"><i class="fa fa-' + icon + '"></i>' + text + '</a>';
    return output;
  }
});