(function() {

	var NavigationController = require('utility/NavigationController');
	var TableWindow = require('ui/common/TableWindow');

	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	var Window;
	
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		Window = require('ui/handheld/ApplicationWindow');
	}
	
	
	
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		// iPhone and Mobile Web make use of the platform-specific navigation controller,
		// all other platforms follow a similar UI pattern
		if (osname === 'iphone') {
			Window = require('ui/handheld/ios/ApplicationWindow');
		}
		//else if (osname == 'mobileweb') {
		//	Window = require('ui/handheld/mobileweb/ApplicationWindow');
		//}
		else {
			Window = require('ui/handheld/android/ApplicationWindow');
		}
	}
	
	
//create NavigationController which will drive our application
	var controller = new NavigationController(Window);
	
//open initial window
	controller.open(new TableWindow(controller));
})();


