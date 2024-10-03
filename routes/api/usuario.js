const router = require("express").Router()

const Usuario = require("../../models/usuario.model")

router.get("/", async (req, res) => {
    try {
        const usuarios = await Usuario.find()
        
        return res.json(usuarios)
    } catch (error) {
        console.log(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const usuario = await Usuario.findById(id);

        return res.json(usuario)
    } catch (error) {
        console.log(error);
        
    }
})


router.put("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const updates = req.body

        const updatedUsuario = await Usuario.findByIdAndUpdate(id, updates, {new : true})

        return res.json({token: generateToken(updatedUsuario)})
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