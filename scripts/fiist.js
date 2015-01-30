$(document).ready(function(){			
	//intro
	$("#openpitch, #ipad").fadeIn(1000, function(){
		if( !(/Android|webOS|iPhone|iPad|iPod|BB/i.test(navigator.userAgent))) {
			$("#bar").delay(500).fadeIn(1000);
		}
	});
	
	//tabs
	$("#1").addClass("orangetab");
	$(".1").fadeIn();
	var lasttab = 1;
	
	$(".tab").click(function(){
		var tabid = $(this).attr("id");
		if(tabid != lasttab){
			$("#" + lasttab).removeClass("orangetab");		
			$(this).addClass("orangetab");		
			$("." + lasttab).fadeOut("fast",function(){
				$("." + tabid).fadeIn("fast");
				lasttab = tabid;
			});
		}
	});	
		
	$(function(){	
		var exp = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i;
		var email = $('#restaurant_email');

		$('form').submit(function(){
			var $this = $(this);

			var url = $(this).attr('action');

			var check = exp.test(email.val());

			if (!check) {
				email.addClass("errorbackground");
			} else {
				email.removeClass("errorbackground");
				$(".fields").fadeOut("fast",function(){
					$(".submitmessage").fadeIn("fast");
				});
			}
			return false;
		});
	});	
	
	//moving screen
	var signuptop = $("#signup").offset();
		
	$("#bar, #learnmore").click(function(){
		$("html, body").animate({ scrollTop: $("#opencontent").height()}, "slow");						
	});					
	$("#getstarted, .top").click(function(){
		$("html, body").animate({ scrollTop: signuptop.top }, 1500);
		determinePath();
	});	
	
	//sign up form
	$("#signupbutton").click(function(){
			determinePath();
	});	
	$("#closesign").click(function(){		
		$("#signupform").fadeOut("slow",function(){
			$("#signupbacking").animate({height:"0px"}, "fast");		
		});
	});
	
	function determinePath(){
		var pathname = window.location.pathname;
		if(pathname.indexOf("diners") != -1){
			openSign(240);
		} else {
			openSign(300);
		}		
	}
	
	function openSign(x){
		$("#signupbacking").animate({height: x + "px"}, "fast",function(){
			$("html, body").animate({ scrollTop: signuptop.top }, "slow");
			$("#signupform").fadeIn("slow");
		});
	}
	
	//video
	$("#videoopen").click(function(){				
		$("#videobox").fadeIn(function(){
			$("#videobacking").delay(500).fadeIn("slow");
		});		
	});
});

