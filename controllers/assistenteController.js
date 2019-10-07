const marcarHorario = require("../services/marcarHorario");
const router = require("express").Router();

router.get("/assistente", (request, response) => {
	console.log("Ação recebida");
	return response.json({ message: "Assistente Funcionando!" });
});

router.post("/assistent/action", async (request, response) => {
	const { action, ...payload } = request.body;

	switch (action) {
		case "marcar_horario": {
			const marcarHorarioResponse = await marcarHorario(payload);
			return response.json(marcarHorarioResponse);
		}
	}

	return response.json({
		message: "Bem vindo a barbearia, como posso ajudar?"
	});
});

module.exports = router;
