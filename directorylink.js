
function addLink(){ 
	var div_ab = document.getElementById("business_directory");
	var ab_link = "http://www.bbb.org/northwest/accredited-business-directory";
	if (typeof(div_ab) != 'undefined' && div_ab !== null){
  		console.log('div AB exists');
		//set the background image and cursor 
					div_ab.setAttribute('style', 'background: url(http://www.bbb.org/globalassets/local-bbbs/dupont-wa-114/media/block_images/homepage_industrylink.jpg) !important; cursor: pointer; ');
				//set title if status wont show
		div_ab.setAttribute('title',  ab_link);
		//set the status bar message
		div_ab.setAttribute('onmouseover', "javascript:self.status = '" + ab_link + " '; return true; ");
		div_ab.setAttribute('onmouseout', "javascript:self.status = '" + ab_link + " '; return true; ");
		//set the link
		div_ab.setAttribute('onclick', "javascript:window.location.href = '" + ab_link + " '; ");

	} else{
		//console.log('div AB DOES NOT exist');
	}
		
		
	}



jQuery.fn.superfish.defaults.delay = 100;

$(window).load(function() {
	console.log('done loading homepage...');
	addLink();
});