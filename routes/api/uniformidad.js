const router = require("express").Router()

const Uniformidad = require("../../models/uniformidad.model") 

router.get("/", async (req, res) => {
    try {
        const uniformidades = await Uniformidad.find()
        
        return res.json(uniformidades)
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
        const uniformidad = await Uniformidad.findById(id);

        return res.json(uniformidad)
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
        const uniformidad = req.body

        const newUniformidad = await Uniformidad.create(uniformidad)

        return res.json(newUniformidad)
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

        const updatedUniformidad = await Uniformidad.findByIdAndUpdate(id, updates, {new : true})

        return res.json(updatedUniformidad)
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
         const deletedUniformidad = await Uniformidad.findByIdAndDelete(id)

         return res.json(deletedUniformidad)
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