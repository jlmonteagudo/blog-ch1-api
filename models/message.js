var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MessageSchema = new Schema({
	text: { type: String, required: true }
});

module.exports = mongoose.model('Message', MessageSchema);
