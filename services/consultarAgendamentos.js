const agendaModel = require("../models/agenda");

const consultarAgendamentos = async () => {
	const agendamentos = await agendaModel.find();
	return { agendamentos };
};

module.exports = consultarAgendamentos;
