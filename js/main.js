(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		$('.counter').countUp({
		  'time': 2000,
		  'delay': 10
		});
		
	});
    jQuery(window).load(function(){

        
    });
}