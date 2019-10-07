const mongoose = require("mongoose");

const agendaSchema = new mongoose.Schema({
	pessoa: {
		nome: { type: String },
		telefone: { type: String }
	},
	servico: { type: String },
	date: { type: Date }
});

const agenda = mongoose.model("Agenda", agendaSchema);
module.exports = agenda;
