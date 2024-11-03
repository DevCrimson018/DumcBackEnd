const router = require("express").Router()

router.use("/sign", require("./api/sign"))
router.use("/disciplina", require("./api/disciplina"))
router.use("/uniformidad", require("./api/uniformidad"))
router.use("/usuarios", require("./api/usuario"))
router.use("/marcha", require("./api/marcha"))  
router.use("/ausencia", require("./api/ausencia"))

module.exports = router