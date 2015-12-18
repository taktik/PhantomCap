var page = require('webpage').create(), system = require('system'), hS, vS, hvz;
if (system.args.length < 4) {
    console.log('Usage: maps.js horizontalSize vertictalSize hsz');
    console.log('Example: maps.js 1280 1024 "50.782828,4.3654962,11.14z"');
    phantom.exit(1);
} else {
    hS = parseInt(system.args[1]);
    vS = parseInt(system.args[2]);
    hvz = system.args[3];
    console.log('Starting...');
	page.viewportSize = {width: hS, height: vS};
	page.open(encodeURI('http://www.google.be/maps/@'+hvz+'/data=!5m1!1e1'), function(status) {
		if (status !== 'success') {
	    	console.log('Unable to access network: '+status);
	 		phantom.exit();
	   } else {
	  		window.setTimeout(function() {
			page.render('map.png');
			phantom.exit(); },1000);
		}
	});
}
