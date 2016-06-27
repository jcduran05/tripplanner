var db=require('./index');
var Sequielize=require('sequelize');
var placeToBe=require('./place');

var Restaurant=db.define('restaurant',{
	name:{
		type:Sequelize.STRING

	},
	cuisine:{
		type:Sequelize.INTEGER
	},
	price:{
		type:Sequelize.INTEGER

	},

});

Restaurant.belongsTo(placeToBe);