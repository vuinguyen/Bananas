/**
 * @author Vui Nguyen
 */
//function ListGroup(parentWin, title, Window, controller) {
function ListGroup(title, Window, controller) {
//function ListGroup(title, Window) {
	//var NavigationController = require('ui/common/NavigationController');
	//controller = new NavigationController();
	
	var bananaWindow = new Window(title);
	var bananaCreamPieWindow = new Window('Banana Cream Pie');
	var bananaPricesWindow = new Window('Prices');
	//var bananaWindow = Ti.UI.createWindow({
	//	title:title,
	//	backgroundColor:'white'
	//}); 
	
	var bananaPricesView = Ti.UI.createView({});
	var pricesLabel = Ti.UI.createLabel({
		text: '$$',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	bananaPricesView.add(pricesLabel);
	bananaPricesWindow.add(bananaPricesView);
	
	var bananaData = [
		{title:'Banana Cream Pie', color: 'black', hasChild:true},
		{title:'Banana Bread', color: 'black', hasChild:true},
		{title:'Strawberries and Bananas', color: 'black', hasChild:true},
		{title:'Banana Split', color: 'black', hasChild:true}
	];
	
	var creamPieData = [
		{title: 'Small', color: 'black', price: '1.25', hasChild: true},
		{title: 'Medium', color: 'black', price: '1.50', hasChild: true},
		{title: 'Large', color: 'black', price: '2.50', hasChild: true},
	];
	var creamPieView = Ti.UI.createTableView({
		data:creamPieData
	});
	creamPieView.addEventListener('click', function(e){
		pricesLabel.text = '$' + e.rowData.price;
		//parentWin.containingTab.open(bananaPricesWindow);
		controller.open(bananaPricesWindow);
	});
	bananaCreamPieWindow.add(creamPieView);
	
	var bananaView = Ti.UI.createTableView({
		data:bananaData
	});
	bananaView.addEventListener('click', function(e){
		if (e.index === 0)
		{
			//parentWin.containingTab.open(bananaCreamPieWindow);
			controller.open(bananaCreamPieWindow);
		}
		else
		{
			alert('Plain ol\' alert box.');
		}
	});
	bananaWindow.add(bananaView);
	
	
	var breadData = [
		{title: 'S', color: 'black', price: '1.50', hasChild: true},
		{title: 'M', color: 'black', price: '1.75', hasChild: true},
		{title: 'L', color: 'black', price: '2.00', hasChild: true},
	];
	return bananaWindow;
};

module.exports = ListGroup;
