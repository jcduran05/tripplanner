var db=require('./index');
var placeToBe=require('./place');
var Sequielize=require('sequelize');

var Activity=db.define('activity',{
	name:{
		type:Sequelize.STRING

	},
	age_range:{
		type:Sequelize.STRING
	},
	

});


Activity.belongsTo(placeToBe);