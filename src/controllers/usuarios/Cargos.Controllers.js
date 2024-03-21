const Mysql = require("../../../database/mysql");
const CagosQuery = require("../../model/usuarios/Cargos");

class Cargos {
    CriarCargo = (req, res) => {
        try {
            const cargo = req.body.cargo
            const criar = Mysql.query(`${CagosQuery.criar} ('${cargo}')`, (erro, dado) => {
                if(erro) {
                    return res.send('Tivemos um erro ao cadastrar novo dado')
                }
                return res.json(dado)
            })   
        } catch (error) {
            return res.json({'erro': 'Erro na requisição!!!'})
        }
    }
}

const CargosController = new Cargos

module.exports = CargosController