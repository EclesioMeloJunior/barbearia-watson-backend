const agendaModel = require("../models/agenda");

const marcarHorarioService = async ({ servico, dia, horario, nome }) => {
	const dataEHora = new Date(`${dia} ${tConvert(horario)}`);

	const horarioOcupado = await agendaModel.find({ date: dataEHora });

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

function tConvert(time) {
	// Check correct time format and split into components
	time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
		time
	];

	if (time.length > 1) {
		// If time format correct
		time = time.slice(1); // Remove full string match value
		time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
		time[0] = +time[0] % 12 || 12; // Adjust hours
	}
	return time.join(""); // return adjusted time or original string
}

module.exports = marcarHorarioService;
