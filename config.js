const env = require("dotenv");
env.config();

module.exports = {
	app: {
		port: process.env.PORT
	}
};
