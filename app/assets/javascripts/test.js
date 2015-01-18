$(document).ready(function() {
	
	
	temp = $("#nav-bar").children('li')[0];
	s = ($(temp).find('a')).text();
	($(temp).find('a')).text("");
	$($(temp).find('a')).append('<i class="fa fa-home"></i> '+s);
	
	
	temp = $("#nav-bar").children('li')[1];
	s = ($(temp).find('a')).text();
	($(temp).find('a')).text("");
	$($(temp).find('a')).append('<i class="fa fa-shopping-cart"></i> '+s);
	
	
	temp = $("#nav-bar").children('li')[2];
	($(temp).find('a')).text("");
	$($(temp).find('a')).append('<i class="fa fa-user"></i> Account');
	
	temp = $("#nav-bar").children('li')[3];
	s = ($(temp).find('a')).text();
	($(temp).find('a')).text("");
	$($(temp).find('a')).append('<i class="fa fa-lock"></i> '+s);
	

});