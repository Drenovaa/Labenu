import knex from 'knex'
import dotenv from 'dotenv'
dotenv.config()
const connection = knex({ // Estabelece conexão com o banco
 client: "mysql",
 connection: {
 host: "35.226.146.116",
 port: 3306,
 user: "2125554-guilherme-rodrigues",
 password: "wEBIZVvywxQXZ9V3hvo0",
 database: "paiva-2125554-guilherme-rodrigues",
 multipleStatements: true
 }
})
export default connection