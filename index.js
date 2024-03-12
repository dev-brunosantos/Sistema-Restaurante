require('dotenv').config()
const app = require("./src/app")
const Mysql = require("./database/mysql")

const link = process.env.LINK
const port = process.env.PORT || 5000
const url = `${link}:${port}`

function ConectaDB() {
    return Mysql
}

app.listen(port, () => {
    return (
        console.log(`Servidor rodando em: ${url}`),
        ConectaDB()
    )
})