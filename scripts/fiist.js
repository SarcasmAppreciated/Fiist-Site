$(document).ready(function(){			
	//intro
	$("#openpitch, #ipad").fadeIn(1000, function(){
		if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))) {
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
	
	//sign up form
	$("#signupbutton").click(function(){
		$("#signupbacking").animate({height:"300px"}, "fast",function(){
			$("html, body").animate({ scrollTop: signuptop.top }, "slow");
			$("#signupform").fadeIn("slow");
		});		
	});
	$("#closesign").click(function(){		
		$("#signupbacking").hide("fast");
	});
	
	$(function(){	
		var exp = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i;
		var email = $('#restaurant_email');

		$('form').submit(function(){
			var $this = $(this);

			var url = $(this).attr('action');

			var check = exp.test(email.val());

			if (!check) {
				$("#restaurant_email").addClass("errorbackground");
			} else {
				//$.post(url, $this.serialize());
				$("#restaurant_email").removeClass("errorbackground");
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
	});
					
});