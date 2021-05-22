import express from 'express'
import mysql from 'mysql'

const app = express()
const port = 3000

const db = mysql.createConnection({
    host: 'localhost',
    user: 'service',
    password: 'deargodwhy',
    database: 'user_manager'
})

db.connect()

app.get('/name', (req, res) => {
    const id = req.params['id'] // SQL INJECTION ATTACKS AHHHHH...
    db.query(`SELECT name FROM users WHERE id = ${id}`, (error, results) => {
        if (error) throw error;
        res.send(results[0].name)
    })
})

app.put('/name', (req, res) => {
    const {id, name} = req.params // ...AHHHHHH
    db.query(`INSERT INTO users (id, name) VALUES (${id}, ${name})`, error => {
        if (error) throw error;
        res.sendStatus(200)
    })
})

app.listen(port, () => {
    console.log(`listening on *:${port}`)
})