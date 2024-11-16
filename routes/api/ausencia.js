const router = require("express").Router()

const Ausencia = require("../../models/ausencia.model")


router.get("/", async (req, res) => {
    try {
        const ausencias = await Ausencia.find()
        
        return res.json(ausencias)
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
        const ausencia = await Ausencia.findById(id);

        return res.json(ausencia)
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
        const ausencia = req.body

        const newAusencia = await Ausencia.create(ausencia)

        return res.json(newAusencia)
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

        const updatedAusencia = await Ausencia.findByIdAndUpdate(id, updates, {new : true})

        return res.json(updatedAusencia)
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
         const deletedAusencia = await Ausencia.findByIdAndDelete(id)

         return res.json(deletedAusencia)
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