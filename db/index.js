var mongoose = require('mongoose');

exports.start = function() {
	mongoose.connect('mongodb://localhost/ch1');	
}
