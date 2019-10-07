const agendaModel = require("../models/agenda");

const marcarHorarioService = async ({ servico, dia, horario }) => {
	const agendaDto = {
		servico,
		date: new Date(`${dia} ${horario}`)
	};

	const agenda = await agendaModel.create(agendaDto);

	console.log(agenda);

	return { message: "Horário marcado com sucesso!" };
};

module.exports = marcarHorarioService;
