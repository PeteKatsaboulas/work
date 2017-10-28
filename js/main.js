
$(function(){

	var $window = $(window);	

	$window.on('load', function(){
       
        $('#main').addClass('open');	
        $('.loader').fadeOut('fast', function(){
        	thumbsUp();
        });			
		setStage();	

	});
		
	$window.on('resize', function(){
		 
		thumbsUp();	
		setStage();
							
	});	

	function setStage(){

		$('.title, .blank-mark').each(function(){
						
			$(this).css({ top:'50%', marginTop: '-' + $(this).outerHeight()/2 + 'px' });
			$(this).css({ left:'50%', marginLeft: '-' + $(this).outerWidth()/2 + 'px' });
									
		});
			
	};
	setStage();
	
	$('#main').on('scroll', function(){
		
		thumbsUp();
		
	});
	
	function thumbsUp(){
		
		$('.container').each(function(i){
			
			var _top = $(this).offset().top;
			var _vp  = $('#main').scrollTop() + $('#main').height()+500;
			
			if( _vp > _top ){
				
				$(this).delay(72*i).queue( function(next){ 
					$(this).addClass('active');
					next(); 
				});
				
			}	
			
				
		});
		
	}

	$('.thumb').on('mouseenter', function(){

	    $(this).find('img').addClass('active');

	});
	$('.thumb').on('mouseleave', function(){

	    $(this).find('img').removeClass('active');

	});

	/*  View projects  */
	var _index = 0;

	$('.thumb').on('mousedown', function(){

		_index = $(this).index();

		$('#main .wrap').addClass('close');
		$('#projects').addClass('active');
		$('.project').eq(_index-2).addClass('active').scrollTop(0);
		$('.close-project').fadeIn('fast');
		$('body').css({ overflow:'hidden' });
		$('.project').eq(_index-2).find('.rise').delay(500).each(function(i){

			$(this).delay(150*i).queue( function(next){
				 
			    $(this).addClass('active');
			    next(); 
				
			});

		});

	});

	/*  Close projects  */
	$('.close-project').on('mousedown', function(){

		$(this).fadeOut('fast', function(){
			
			$('#main .wrap').removeClass('close');
			$('#projects').removeClass('active');
			if($window.width() <= 640){			
				$('body').css({ '-webkit-overflow-scrolling':'touch' });				
			} else{			
				$('body').css({ 'overflow':'scroll' });			
			}			
		
			$('.project').eq(_index-2).removeClass('active');	

			setTimeout(function(){
			
				$('.project').eq(_index-2).find('.rise').delay(500).each(function(){

				    $(this).removeClass('active');

				});
			
			},500);
			
		});		

	});
	
	$('.main-top').on('mousedown', function(){
	
	    $('#main').animate({ scrollTop: 0 });
		
	});
	$('.top').on('mousedown', function(){
	
	    $(this).parent().animate({ scrollTop: 0 });
		
	});


});


