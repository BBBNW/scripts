function addSearchbox(){
	var div_ab = document.getElementById("business_directory");
	//var div_ab = document.createElement('div');
	//div_ab.setAttribute('id', 'business_directory');
	var ab_link = "http://www.bbb.org/minnesota/accredited-business-directory";

	if (typeof(div_ab) != 'undefined' && div_ab != null){
  		//console.log('div AB exists');
		div_ab.setAttribute('style', 'cursor: pointer;');
		div_ab.setAttribute('alt', ab_link);
		
		//remove existing elements from CMS
		while (div_ab.firstChild) {
			div_ab.removeChild(div_ab.firstChild);
		}		
		
		//use Nashville as default image 
		//if BBB requires to have their own image, set the background image in this conditional statement for the BBB
		var search_bg_image = "";
		search_bg_image = 'http://www.bbb.org/globalassets/shared/media/block-images/baseline-images/bbb-directory11.jpg';
		
		//create the text element for TOB
		var txt_tob = document.createElement('input');
		txt_tob.setAttribute('class', 'search-box');
		txt_tob.setAttribute('style', 'background-color: #fff; border: medium none; color: #808080; font-size: 14px; height: 24px; width: 245px; margin-left: 17px; margin-top: 76px; position: absolute; ');
		txt_tob.setAttribute('onclick', 'if(this.value == "Business Name or Type of Business") {this.value=""};');
		//txt_tob.setAttribute('onkeypress', 'if(event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {document.getElementById("btnSearch").click();return false;}} else {return true};' );
		//txt_tob.setAttribute('onblur', 'if(this.value == "") {this.value="Business Name or Type of Business"};');
                txt_tob.setAttribute('placeholder', 'Business Name or Type of Business');
		txt_tob.setAttribute('type', 'text');
		txt_tob.setAttribute('name', 'directory-tob2');
		txt_tob.setAttribute('id', 'directory-tob2');
		//txt_tob.setAttribute('value', 'Business Name or Type of Business');
		txt_tob.setAttribute('onkeyup', "if(event.keyCode == 13) { javascript:searchAB('tob') } " );
		div_ab.appendChild(txt_tob);
		
		//create the text element for LOCATION
		var txt_loc = document.createElement('input');
		txt_loc.setAttribute('type', 'text');
		txt_loc.setAttribute('name', 'location2');
		txt_loc.setAttribute('id', 'directory-location2');
		//txt_loc.setAttribute('value', 'Burnsville, MN');
		txt_loc.setAttribute('style', 'background-color: #fff; border: medium none; color: #808080; font-size: 14px; height: 24px; width: 245px; margin-left: 17px; margin-top: 111px; position: absolute; ');
		txt_loc.setAttribute('onkeyup', "if(event.keyCode == 13) { javascript:searchAB('loc') } " );
		//txt_loc.setAttribute('onblur', 'if(this.value == "") {this.value="Burnsville, MN"};');
                //txt_loc.setAttribute('onfocus', 'if(this.value === "Burnsville, MN") {this.value=""};');
                                txt_loc.setAttribute('placeholder', 'Burnsville, MN');
                                div_ab.appendChild(txt_loc);
                
		var alert_bool = document.createElement('input');
		alert_bool.setAttribute('id', 'alert_bool');
		alert_bool.setAttribute('type', 'hidden');
		alert_bool.setAttribute('value', 0);
		div_ab.appendChild(alert_bool); 

		var abtype = document.createElement('input');
		abtype.setAttribute('id', 'abtype');
		abtype.setAttribute('type', 'hidden');
		abtype.setAttribute('value', 'abpages2');
		div_ab.appendChild(abtype); 
		
		//create the image
		var image = document.createElement('img');
		image.setAttribute('id', 'Image-Maps-Com-image-maps-2014-08-25-191205');
		image.setAttribute('src', search_bg_image);
		image.setAttribute('border', 0);
		image.setAttribute('width', '288');
		image.setAttribute('height', '297');
		image.setAttribute('orgWidth', '288');
		image.setAttribute('orgHeight', '297');
		image.setAttribute('usemap', '#dirsearchbtn');
		image.setAttribute('alt', ab_link);
		image.setAttribute('onclick',  "javascript:searchAB('image')" );
		div_ab.appendChild(image);
		
		//create the image map
		var image_map = document.createElement('map');
		image_map.setAttribute('name', 'dirsearchbtn');
		image_map.setAttribute('id', 'dirsearchbtn');
		
		//create the area map for the clickable Search Button
		var map_area = document.createElement('area');
		map_area.setAttribute('alt', ab_link);
		map_area.setAttribute('title', ab_link);
		map_area.setAttribute('href',  "javascript:searchAB('search_btn')" );
		map_area.setAttribute('shape', 'rect');
		map_area.setAttribute('coords', '171,144,271,173');
		map_area.setAttribute('style', 'outline:none');
		map_area.setAttribute('target', '_self');
		map_area.setAttribute('style', '');
		image_map.appendChild(map_area);
		
		div_ab.appendChild(image_map);	
	} else{
		//console.log('div AB DOES NOT exist');
	}
}

function searchAB(type){

	var alert_bool = document.getElementById('alert_bool');
	
	var tob = document.getElementById('directory-tob2').value;
	tob = tob.trim(); 
	var loc = document.getElementById('directory-location2').value;
	loc = loc.trim();
	tob = tob.replace(/[^\w\s]/gi, ' ');
	//loc = loc.replace(/[^\w\s]/gi, ' ');
	
	//if no location was entered, use default location
	var default_location = "Burnsville, MN";
	//console.log( 'loc.length = ' + loc.length + ' ---vs--- default length = ' + default_location.length);
	if(loc.length == 0 && default_location.length >0 ) loc = default_location; 
	
	var default_tob = 'Business Name or Type of Business';
	
	var ab_url = "http://www.bbb.org/minnesota/accredited-business-directory";
	var search_url = "http://www.bbb.org/minnesota/accredited-business-directory/find/?s=" + tob + "&loc=" + loc;
	var search_old_url = "http://www.bbb.org/minnesota/customer-reviews/searcholddirectory.php?key=" + tob + "&loc=" + loc;

	var option_7103 = document.getElementById('abtype').value;
	
	if(type == 'image') { 
		window.location.assign( ab_url );
	}
		
	if(type == 'tob' || type == 'loc' || type == 'search_btn'){ 
		//console.log('tob value = ' + tob)
		//console.log('is alert on? ' + alert_bool.value);
		if(tob!='' && tob != default_tob){
			
			if(  option_7103 == 'abpages' ) window.location.assign(search_old_url);
			else window.location.assign(search_url);
			return;
		}
		if(alert_bool.value == 1){
			document.getElementById('directory-tob2').value='';
			document.getElementById('directory-tob2').focus();
                        alert('Please type a business or category');
			return;
		}
		if(tob == '' || tob == default_tob){
			//tob.value='Business Name or Type of Business';
			alert_bool.value = 1;
                        document.getElementById('directory-tob2').focus();
			alert('Please type a business or category');
			return;
		} 
	}

	
}

	jQuery.fn.superfish.defaults.delay = 100;


addSearchbox();