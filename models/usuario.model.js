const {model, Schema} = require("mongoose")

const userSchema = new Schema({
    nombre: {type: String, required: true},
    usuario: {type: String, required: true},
    zona: {type: String, required: true},
    tipo: {type: String, required: true},
    contrasena: {type: String, required: true},
})

module.exports = model("usuario", userSchema)