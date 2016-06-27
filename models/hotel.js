var db=require('./index');
var placeToBe=require('./place');
var Sequielize=require('sequelize');
var Hotel=db.define('hotel',{
	name:{
		type:Sequelize.STRING

	},
	num_stars:{
		type:Sequelize.INTEGER
	},
	amenities:{
		type:Sequelize.STRING
	},

});

Hotel.belongsTo(placeToBe);