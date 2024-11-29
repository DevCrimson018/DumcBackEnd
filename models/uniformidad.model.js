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
        camisas: {
            cantidadGalonesFalsos: {type: Number, required: false},
            bolsillosIncorrectos: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
       
        pantalones: {
            cantidadPantalonesConPinza: {type: Number, required: false},
            cantidadPantalonesConTapa: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        faldas: {
            cantidadFaldasSinCorteA: {type: Number, required: false},
            faldasSinPlisadoFrontal: {type: Number, required: false},
            faldasPorEncimaDeRodillas: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        calzado: {
            calzadoDeColores: {type: Number, required: false},
            calzadoInformal: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        medias: {
            cantidadMediasColorIncorrecto: {type: Number, required: false},
            alturaDeMediasIncorrecta: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        correas: {
            cantidadCorreasNoOficiales: {type: Number, required: false},
            cantidadCorreasIncorrectas: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        boinas: {
            cantidadBoinasFaltantes: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        insignias: {
            triangulosFaltantes: {type: Number, required: false},
            globosFaltantes: {type: Number, required: false},
            arcosFaltantes: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        panoletas_anillos: {
            panoletasFaltantes: {type: Number, required: false},
            anillosFaltantes: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        union: {
            unionesFaltantes: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        directores: {
            cantidadCordonesDeDirector: {type: Number, required: false},
            cantidadParesDeGalonesDeDirector: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },

        cantidadPersonasInvestidasDeClases: {type: Number, required: false},
        
        distintivos: {
            distintivosDeClase: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },

        botones: {
            botonesDeClase: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        rangos: {
            rangosDeClase: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        bandas: {
            personasSinBanda: {type: Number, required: false},
            bandasSinOctagono: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        
        especialidades: {
            bandasSinEspecialidades: {type: Number, required: false},
            bandasConMenosDe4Especialidades: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        
        bandera: {
            bandasSinBanderaNacional: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },

        distitivoBanda: {
            bandasSinDistintivoDeNombre: {type: Number, required: false},
            comentario: {type: String, required: false},
            puntos: {type: Number, required: false}
        },
        

    },

    puntosGeneral: {type: Number, require: false},
    comentarioGeneral: {type: String, required: false},
    
    fecha: {type: String, required: true},
})

module.exports = model("uniformidad", disciplinaSchema)