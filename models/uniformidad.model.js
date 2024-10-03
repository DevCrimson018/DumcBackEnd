const {model, Schema} = require("mongoose")

const disciplinaSchema = new Schema({
    zona: {type: String, required: true},
    club: {type: String, required: true},
    idUsuario: {type: String, required: true},
    nombreUsuario: {type: String, required: true},
    miembros: {
        dirigentesMasculinos: {type: Number, required: true},
        dirigentesFemenino: {type: Number, required: true},
        miembrosMasculinos: {type: Number, required: true},
        miembrosFemenino: {type: Number, required: true}
    },
    faltas: {
        galardonesFaltantesCamisa: {type: Number, required: false},
        bolsillosIncorrectos: {type: Number, required: false},
        pantalonesConPinza: {type: Number, required: false},
        pantalonesConTapa: {type: Number, required: false},
        faldasSinCorteA: {type: Number, required: false},
        faldasSinPlisadoFrontal: {type: Number, required: false},
        faldasPorEncimaDeRodillas: {type: Number, required: false},
        calzadoDeColores: {type: Number, required: false},
        calzadoInformal: {type: Number, required: false},
        mediasColorIncorrecto: {type: Number, required: false},
        alturaDeMediasIncorrecta: {type: Number, required: false},
        correasNoOficiales: {type: Number, required: false},
        correasIncorrectas: {type: Number, required: false},
        boinasFaltantes: {type: Number, required: false},
        triangulosFaltantes: {type: Number, required: false},
        globosFaltantes: {type: Number, required: false},
        arcosFaltantes: {type: Number, required: false},
        panoletasFaltantes: {type: Number, required: false},
        anillosFaltantes: {type: Number, required: false},
        unionesFaltantes: {type: Number, required: false},
        cordonesDeDirector: {type: Number, required: false},
        paresDeGalonesDeDirector: {type: Number, required: false},
        personasInvestidasDeClases: {type: Number, required: false},
        distintivosDeClase: {type: Number, required: false},
        botonesDeClase: {type: Number, required: false},
        rangosDeClase: {type: Number, required: false},
        personasSinBanda: {type: Number, required: false},
        bandasSinOctagono: {type: Number, required: false},
        bandasSinEspecialidades: {type: Number, required: false},
        bandasConMenosDe4Especialidades: {type: Number, required: false},
        bandasSinBanderaNacional: {type: Number, required: false},
        bandasSinDistintivoDeNombre: {type: Number, required: false},

    },
    fecha: {type: String, required: true},
})

module.exports = model("uniformidad", disciplinaSchema)