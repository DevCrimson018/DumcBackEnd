const {model, Schema} = require("mongoose")

const disciplinaSchema = new Schema({
    gravedad: {type: String, required: true},
    tipo: {type: String, required: true},
    zona: {type: String, required: true},
    club: {type: String, required: true},
    comentario: {type: String, required: true},
    fecha: {type: String, required: true},
})

module.exports = model("disciplina", disciplinaSchema)