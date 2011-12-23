(function($){

	// variable for storing the menu state
	var state = false;
	
	//plugin code
	$.fn.responsiveMenu = function(options){

		//plugin's default options
		var settings = {
		switchWidth: 768,
		addClass: 'hidden',
		menuName: 'menu',
		menuId: 'togMenu',
		menu: 'ul'
	};

	//function to decide if mobile or not
	function isMobile(){
		return ($(window).width() < settings.switchWidth);
	}

	//plugin functionality
	function run($this) {

		//menu doesn't exist
		if(isMobile()){
			$('#'+settings.menuId).show();
			if(state == false)
			{
				$('#'+$this.attr('id')+' ul').hide().addClass(settings.addClass);
			}
		} else {
			$('#'+settings.menuId).hide();
			$('#'+$this.attr('id')+' ul').show().removeClass(settings.addClass);
		}
	}
	
	function toggle($this)
	{	
		if(state == false) {
			$('#'+$this.attr('id')+' '+settings.menu).show().removeClass(settings.addClass);
			state = true;
		} else {
			$('#'+$this.attr('id')+' '+settings.menu).hide().addClass(settings.addClass);
			state = false;	
		}
	}
	
	return this.each(function() {

		//override the default settings if user provides some
		if(options){$.extend(settings, options);}

		//cache "this"
		var $this = $(this);

		//bind event to browser resize
		$(window).resize(function(){run($this);});
		
		// set up the menu button
		$('#'+$this.attr('id')+' '+settings.menu).before('<a id="'+settings.menuId+'" href="#" >'+settings.menuName+'</a>');
		
		$('#'+settings.menuId).hide().click(function(){
			toggle($this);
		});
		
		//run plugin
		run($this);

	});

	};
  
})(jQuery);