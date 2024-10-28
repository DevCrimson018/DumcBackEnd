const {model, Schema} = require("mongoose")

const ausenciaSchema = new Schema({
    usuario: {type: String, required: true},
    dia: {type: String, required: true},
    evento: {type: String, required: true},
    clubesAusentes: [
        {
            zona: {type: String, required: true},
            club: {type: String, required: true}
        }
    ]
})

module.exports = model("ausencia", ausenciaSchema)