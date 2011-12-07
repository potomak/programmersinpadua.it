$(document).ready(function() {
	$.getJSON('./attending.json', function(data){
		for(var i=0; i<data.length; i++) {
			$('ul.people').append('<li class="person"><img src="https://graph.facebook.com/'+ data[i].id +'/picture" alt="'+ data[i].name +'" title="'+ data[i].name +'"/></li>')
		}	
	})
	//console.log(navigator.userAgent);
	if(navigator.userAgent.indexOf('Safari') > 0 && navigator.userAgent.indexOf('Chrome') == -1) {
		toggle = function() {
			$('#logo').toggleClass('animate');
			$('#logo .front').toggleClass('active');
			$('#logo .back').toggleClass('active');
			timeout = setTimeout(toggle, 4000);
		};
		timeout = setTimeout(toggle, 4000);
		$('#logo').hover(function() {
			clearTimeout(timeout);
		}, function() {
			timeout = setTimeout(toggle, 4000);
		});
	}
	else {
		$('#logo .text').css('-webkit-transform', 'rotateX(0deg)');
		toggle = function() {
			if($('#logo .front').is(':hidden')) {
				$('#logo .front').fadeIn(1000);
			}
			else {
				$('#logo .front').fadeOut(1000);
			}
			timeout = setTimeout(toggle, 4000);
		};
		timeout = setTimeout(toggle, 4000);
		$('#logo').hover(function() {
			clearTimeout(timeout);
		}, function() {
			timeout = setTimeout(toggle, 4000);
		});
	}
});