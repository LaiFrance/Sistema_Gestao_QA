const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    default: false,
  },
  descricao: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },

  hora: {
    type: String,
    require: true,
  },

  categoria: {
    type: String,
    require: true,
  },

  prioridade: {
    type: String,
    require: true,
  },

  comentarios: {
    type: String,
    require: true,
  },

  responsavel: {
    type: String,
    require: true,
  },

  status: {
    type: String,
    require: true,
  },

});

module.exports = mongoose.model("Task", taskSchema);