const router = require("express").Router()

const Marcha = require("../../models/marcha.model")

//Rutas

router.get("/", async (req, res) => {
    try {
        const marchas = await Marcha.find()
        
        return res.json(marchas)
    } catch (error) {
        console.log(error);
        return res.json(
            {
                error: error
            }
        )
    }
})

router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const marcha = await Marcha.findById(id);

        return res.json(marcha)
    } catch (error) {
        console.log(error);
        return res.json(
            {
                error: error
            }
        )
        
    }
})

router.post("/", async (req, res) => {
    try {
        const marcha = req.body

        const newMarcha = await Marcha.create(marcha)

        return res.json(newMarcha)
    } catch (error) {
        console.log(error);
        return res.json(
            {
                error: error
            }
        )
    }
})

router.put("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const updates = req.body

        const updatedMarcha = await Marcha.findByIdAndUpdate(id, updates, {new : true})

        return res.json(updatedMarcha)
    } catch (error) {
        console.log(error);
        return res.json(
            {
                error: error
            }
        )
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params
         const deletedMarcha = await Marcha.findByIdAndDelete(id)

         return res.json(deletedMarcha)
    } catch (error) {
        console.log(error);
        return res.json(
            {
                error: error
            }
        )
    }
})


module.exports = router