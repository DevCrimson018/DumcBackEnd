const {Schema, model} = require('mongoose')


const marchaSchema = new Schema({
    usuario: {type: String, required: true},
    zona: {type: Number, required: true},
    club: {type: String, required: true},
    instructor: {type: String, require: true},


    puntosInstructor : {
        evaluadores: {type: String, required: false},
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosPliegueYRepliegue : {
        evaluadores: {type: String, required: false},
        usuario: {type: String, required: false},
        V1: {type: Number, required: false},
        V2: {type: Number, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosCreatividad : {
        evaluadores: {type: String, required: false},
        usuario: {type: String, required: false},
        V1: {type: Number, required: false},
        V2: {type: Number, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosGradoDificultad : {
        evaluadores: {type: String, required: false},
        usuario: {type: String, required: false},
        V1: {type: Number, required: false},
        V2: {type: Number, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    presicionExhibiciones : {
        evaluadores: {type: String, required: false},
        usuario: {type: String, required: false},
        V1: {type: Number, required: false},
        V2: {type: Number, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },
    
    puntosImpactoDelJuez : {
        evaluadores: {type: String, required: false},
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosTiempos : {
        evaluadores: {type: String, required: false},
        usuario: {type: String, required: false},
        tiempoV1: {type: Number, required: false},
        puntosV1: {type: Number, required: false},
        tiempoV2: {type: Number, required: false},
        puntosV2: {type: Number, required: false},
        tiempoGeneral: {type: Number, required: false},
        puntosGeneral: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosReglamentarias : {
        evaluadores: {type: String, required: false},
        usuario: {type: String, required: false},
        puntos: {type: Number, required: false},
        comentario: {type: String, required: false}
    },

    puntosFaltas : {
        evaluadores: {type: String, required: false},
        usuario: {type: String, required: false},
        comentario: {type: String, required: false}
    },

})


module.exports = model("marcha", marchaSchema)