//function TableWindow(title) {
function TableWindow(Window, controller) {
	var FruitWindow = require('ui/common/FruitWindow');
	var WindowGroup = require('ui/common/WindowGroup');
	var ListGroup = require('ui/common/ListGroup');
	var TestWindow = require('ui/common/TestWindow');
	
	//var self = Ti.UI.createWindow({
	//	title:title,
	//	backgroundColor:'white'
	//});
	
	var self = new Window('Table Window');
	
	var tableData = [
		{title:'Apples', price:'1.25', color: 'black', hasChild:true},
		{title:'Grapes', price:'1.50', color: 'black', hasChild:true},
		{title:'Oranges', price:'2.50', color: 'black', hasChild:true},
		{title:'Bananas', price:'1.50', color: 'black', hasChild:true},
		{title:'Pears', price:'1.40', color: 'black', hasChild:true},
		{title:'Kiwis', price:'1.00', color: 'black', hasChild:true}
	];
	
	var table = Ti.UI.createTableView({
		data:tableData
	});
	self.add(table);
	
	var fruitWins = [];
	for (var i = 0; i < tableData.length; i++)
	{
		if (i === 1) // Grapes
		{
			//fruitWins[i] = new WindowGroup(tableData[i].title, controller);
			fruitWins[i] = new TestWindow(controller);
		}
		else if (i === 3) // Bananas
		{
			fruitWins[i] = new ListGroup(tableData[i].title, Window, controller);
		}
		else
		{
			fruitWins[i] = new FruitWindow(tableData[i].title, Window);
		}
	}
	//add behavior
	table.addEventListener('click', function(e) {
		Ti.API.info("I clicked on row " + e.index + " with title " + e.rowData.title);
		//Ti.API.info("tableData length is " + tableData.length + "\n");
		//self.containingTab.open(fruitWins[e.index]);
		controller.open(fruitWins[e.index]);
	});
	return self;
};

module.exports = TableWindow;
