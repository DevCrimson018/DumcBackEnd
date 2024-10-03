const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Usuario = require("../../models/usuario.model")

router.post("/signin", async (req, res) => {
    try {
        const credentials = req.body


        const usuario = await Usuario.find({usuario : credentials.usuario})

        if(usuario.length == 0){
            return res.json({message: "No hay usuario con estos detalles."})
        }

        if(await bcrypt.compare(credentials.contrasena, usuario[0].contrasena)){
            return res.json({token : generateToken(usuario[0])})
        }else{
            return res.json({message : "Contrasena Incorrecta"})
        }

        
    } catch (error) {
        console.log(error);
    }
})

router.post("/signup", async (req, res) => {
    try {
        const usuario = req.body

        const salt = await bcrypt.genSalt()
        const password = await bcrypt.hash(usuario.contrasena, salt)
        usuario.contrasena = password

        const newUsuario = await Usuario.create(usuario)

        return res.json({token: generateToken(newUsuario)})

    } catch (error) {
        console.log(error);
    }
})

function generateToken (usuario) {
    try {
        const payload = {
            _id: usuario._id,
            nombre: usuario.nombre,
            zona: usuario.zona,
            tipo: usuario.tipo
        }

        const token = jwt.sign(payload, process.env.SECRET)

        return token
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = router