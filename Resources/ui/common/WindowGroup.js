//function WindowGroup(parentWin, title) {
function WindowGroup(title, controller) {
//function WindowGroup(title) {
	//var NavigationController = require('ui/common/NavigationController');
	//controller = new NavigationController();
		
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var win_child = Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		});
		
	var win_grandchild = Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	self.add(button);
	
	var addWinToTab = function(nextWindow) {
		//parentWin.containingTab.open(nextWindow);
		controller.open(nextWindow);
		//Ti.UI.currentTab.open(nextWindow); // This is an option, but I don't think that's what we want
	};
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		//parentWin.containingTab.open(win_child);
		controller.open(win_child);
	});
	
	var button_child = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	button_child.addEventListener('click', function() {addWinToTab(win_grandchild)});
	win_child.add(button_child);
	
	
	//button_child.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
	//	self.containingTab.open(win_grandchild);
	//});
	
	
	return self;
};

module.exports = WindowGroup;
