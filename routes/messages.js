var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({messages: req.app.locals.messages});
});

router.post('/', function(req, res, next) {
	let name = req.body.name;
	let message = req.body.message;
	if ( name.length != 0 && message.length != 0 ) {
		req.app.locals.messages.push({
			name: name, 
			message: message
		});
  		res.json({
  			messages: "Сообщение добавлено",
  			success: true
  		});
	} 
    res.json({
    	msg: "Не заполнено имя или сообщение",
    	success: false
    });
});

module.exports = router;
