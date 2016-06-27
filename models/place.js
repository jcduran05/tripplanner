var db=require('./index');
var Sequielize=require('sequelize');
var Place=db.define('place',{
	address:{
		type:Sequelize.STRING

	},
	city:{
		type:Sequelize.STRING
	},
	state:{
		type:Sequelize.STRING
	},
	phone:{
		type:Sequelize.STRING
	},
	location:{
	type:Sequelize.ARRAY(Sequelize.FLOAT)
	}
});