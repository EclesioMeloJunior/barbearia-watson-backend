const router = require("express").Router();

router.get("/assistente", (request, response) => {
	console.log("Ação recebida");
	return response.json({ message: "Assistente Funcionando!" });
});

module.exports = router;
