const { Router } = require('express');
const router = Router()
const {obtenerBooks, obtenerId, agregarLibro, eliminarId, editarPorId} = require("../controladores/controllers")


router.get("/books", obtenerBooks)
router.get("/books/:id", obtenerId )
router.post("/books", agregarLibro)
router.delete("/books/:id", eliminarId)
router.put("/books/:id", editarPorId)

module.exports = router