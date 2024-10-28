const {Schema, model} = require('mongoose')


const marchaSchema = new Schema({
    usuario: {type: String, required: true},
    zona: {type: Number, required: true},
    club: {type: String, required: true},
    instructor: {type: String, require: true},


    puntosInstructor : {
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosPliegueYRepliegue : {
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosCreatividad : {
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosGradoDificultad : {
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    presicionExhibiciones : {
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },
    
    puntosImpactoDelJuez : {
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosTiempos : {
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosReglamentarias : {
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosFaltas : {
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

})


module.exports = model("marcha", marchaSchema)