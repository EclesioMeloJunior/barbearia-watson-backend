const mongoose = require("mongoose");

module.exports = host => {
	return mongoose.connect(host, { useNewUrlParser: true });
};
