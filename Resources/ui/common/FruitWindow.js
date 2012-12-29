//function FruitWindow(window) {
function FruitWindow(title, Window) {
	//var self = Ti.UI.createWindow({
	//	title:title,
	//	backgroundColor:'white'
	//});
	self = new Window(title);
	var view = Ti.UI.createView();
	var label = Ti.UI.createLabel({
		//text:'I am fruit',
		text: title,
		height:'auto',
		width:'auto',
		color:'#000'
	});
	
	view.add(label);
	self.add(view);
	return self;
	//window.add(view);
	//return window;
};

module.exports = FruitWindow;
