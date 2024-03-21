const conexao = require('mysql2')

const MsgErro = 'Por favor, tente novamente.'

const Mysql = conexao.createConnection({
    host: process.env.HOST,
    user: process.env.USUARIO,
    password: process.env.SENHA,
    database: process.env.DATABASE
})

Mysql.connect((erro) => {
    if(erro) {
        return console.log(`Erro ao tentar conexão com o Banco de Dados. ${MsgErro}`)
    }
    return console.log('Conexão com o Banco de Dados realizada com sucesso.')
})

module.exports = Mysql