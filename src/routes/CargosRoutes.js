const { Router } = require('express')
const CargosController = require("../controllers/usuarios/Cargos.Controllers");

const CargosRoutes = Router()

CargosRoutes
    .post('/criar_cargo', CargosController.CriarCargo)

module.exports = CargosRoutes