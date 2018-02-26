const mongoose = require('mongoose')
//use imooc unit 
const DB__URL ='mongodb://127.0.0.1:27017/imooc-chat'
mongoose.connect(DB__URL)
mongoose.connection.on('connected',function(){
	console.log('mongo connect success')
})

const model = {
	user:{
		'user':{'type':String, 'require':true},
		'pwd':{'type':String,'require':true},
		'type':{'type':String,'require':true},
		//profit
		'avatar':{'type':String},
		//resume description
		'desc':{'type':String},
		'title':{'type':String},
		'company':{'type':String},
		'money':{'type':String}
	},
	chat:{//population
		'chatid':{'type':String,'require':true},
		'from':{'type':String,'require':true},
		'to':{'type':String,'require':true},
		'read':{'type':Boolean,'default':false},
		'content':{'type':String,'require':true,'default':''},
		'create_time':{'type':Number,'default':new Date().getTime()}
	}
}

for(let m in model){
	mongoose.model(m,new mongoose.Schema(model[m]))
}


module.exports = {
	getModel:function(name){
		return mongoose.model(name)
	}
}