function FruitWindow(price, title, controller) {
	var self = controller.createWindow(title);
	var view = Ti.UI.createView();
	var label = Ti.UI.createLabel({
		text: '$' + price,
		height:'auto',
		width:'auto',
		color:'#000'
	});
	
	view.add(label);
	self.add(view);
	return self;
};

module.exports = FruitWindow;
