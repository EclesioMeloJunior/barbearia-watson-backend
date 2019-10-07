const router = require("express").Router();

router.get("/assistente", (request, response) => {
	console.log("Ação recebida");
	return response.json({ message: "Assistente Funcionando!" });
});

router.post("/assistent/action", (request, response) => {
	console.log(request.body);
	return response.json({ data: request.body });
});

module.exports = router;
