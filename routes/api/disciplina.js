const router = require("express").Router()

const Disciplina = require("../../models/disciplina.model") 

router.get("/", async (req, res) => {
    try {
        const disciplinas = await Disciplina.find()
        
        return res.json(disciplinas)
    } catch (error) {
        console.log(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const disciplina = await Disciplina.findById(id);

        return res.json(disciplina)
    } catch (error) {
        console.log(error);
        
    }
})

router.post("/", async (req, res) => {
    try {
        const disciplina = req.body

        const newDisciplina = await Disciplina.create(disciplina)

        return res.json(newDisciplina)
    } catch (error) {
        console.log(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const updates = req.body

        const updatedDisciplina = await Disciplina.findByIdAndUpdate(id, updates, {new : true})

        return res.json(updatedDisciplina)
    } catch (error) {
        console.log(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params
         const deletedDisciplina = await Disciplina.findByIdAndDelete(id)

         return res.json(deletedDisciplina)
    } catch (error) {
        console.log(error);
    }
})


module.exports = router