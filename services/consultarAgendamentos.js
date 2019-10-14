const agendaModel = require("../models/agenda");

const consultarAgendamentos = async date => {
	if (!date) return await agendaModel.find({});

	return await agendaModel.find({
		date: {
			$gte: new Date(date)
		}
	});
};

module.exports = consultarAgendamentos;
