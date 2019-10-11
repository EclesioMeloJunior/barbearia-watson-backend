const agendaModel = require("../models/agenda");

const marcarHorarioService = async ({ servico, dia, horario, nome }) => {
	const dataEHora = new Date(`${dia} ${horario}`);

	const horarioOcupado = await agendaModel.find({ date: horario });

	console.log(horarioOcupado);

	if (horarioOcupado.length > 0) {
		return {
			message: `Este horário já está reservado, tente reservar outro horário.`
		};
	}

	const agendaDto = {
		servico,
		date: dataEHora,
		pessoa: {
			nome
		}
	};

	const agenda = await agendaModel.create(agendaDto);

	return {
		message: `Horário marcado! Guarde seu código de reserva ${agenda._id}`
	};
};

module.exports = marcarHorarioService;
