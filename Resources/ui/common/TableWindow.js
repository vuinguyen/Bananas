function TableWindow(controller) {
	var FruitWindow = require('ui/common/FruitWindow');
	var WindowGroup = require('ui/common/WindowGroup');
	var ListGroup = require('ui/common/ListGroup');
	var TestWindow = require('ui/common/TestWindow');
	
	var self = controller.createWindow('Table Window');
	
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
		if (tableData[i].title == 'Grapes')
		{
			fruitWins[i] = new TestWindow(controller);
		}
		else if (tableData[i].title == 'Bananas')
		{
			fruitWins[i] = new ListGroup(tableData[i].title, controller);
		}
		else
		{
			fruitWins[i] = new FruitWindow(tableData[i].price, tableData[i].title, controller);
		}
	}
	//add behavior
	table.addEventListener('click', function(e) {
		Ti.API.info("I clicked on row " + e.index + " with title " + e.rowData.title);
		controller.open(fruitWins[e.index]);
	});
	return self;
};

module.exports = TableWindow;
