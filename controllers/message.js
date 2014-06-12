var Message = require('../models/message');


exports.list = function(req, res) {
	Message.find(function(err, messages) {
		res.json(messages);
	});
};

exports.create = function(req, res) {
	var message = new Message(req.body);

	message.save(function(err, newMessage) {
		if (err) { 
			res.json(400, err.message);
		}
		else {
			res.json(newMessage);
		}
	});
}
