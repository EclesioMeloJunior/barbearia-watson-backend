const cors = require("cors");
const config = require("./config");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
	response.json({ message: "Barbearia Watson!" });
});

app.listen(config.app.port, () => {
	console.log(`Applicação iniciada na porta ${config.app.port}`);
});
