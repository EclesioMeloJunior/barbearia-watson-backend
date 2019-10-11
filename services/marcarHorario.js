const agendaModel = require("../models/agenda");

const marcarHorarioService = async ({ servico, dia, horario, nome }) => {
	const agendaDto = {
		servico,
		date: new Date(`${dia} ${horario}`),
		pessoa: {
			nome
		}
	};

	const agenda = await agendaModel.create(agendaDto);

	console.log(name, agenda);

	return {
		message: `Horário marcado! Guarde seu código de reserva ${agenda._id}`
	};
};

module.exports = marcarHorarioService;
