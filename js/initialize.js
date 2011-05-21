function initialize() {
	//var myLatlng = new google.maps.LatLng(45.411617,11.868153); //collegio mazza
	var myLatlng = new google.maps.LatLng(45.415932,11.994795); //caffè ti amo
	var myOptions = {
		zoom: 16,
		center: myLatlng,
		navigationControl: true,
		navigationControlOptions: {
			style: google.maps.NavigationControlStyle.SMALL
		},
		mapTypeControl: false,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map"), myOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title:"Hello World!"
	});
}