$(document).ready(function() {

    // WIDTH
    $(".blox_affiliate-logos-form").each(function() {
    		var formWidth = $(this).find(".blox_form").outerWidth();
    		$(this).find(".hs_cos_wrapper_type_form").css("max-width",formWidth);
    });

});