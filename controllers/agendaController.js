const consultarAgendamentos = require("../services/consultarAgendamentos");
const router = require("express").Router();

router.get("/agendamentos", async (request, response) => {
	const agendamentos = await consultarAgendamentos(request.query.date);
	return response.json({ agendamentos });
});

module.exports = router;
