const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


let clients = [
    {id: 1, nome: 'André Luz', telefone: 55879516},
    {id: 2, nome: 'Zézinho silva', telefone: 55987625},
    {id: 3, nome: 'João Rocha', telefone: 55948753},
    {id: 4, nome: 'Clebin pocazidéia', telefone: 55951687}
]

app.get('/clients', (req, res) => {
    return res.json(clients)
})

app.get('/clients/:id', (req, res) => {
    const client = clients.filter(value => value.id == req.params.id)
    res.json(client)
})

app.post('/clients', (req, res) => {
    const client = req.body
    clients.push(client)
    res.json(req.body)
})

app.put('/clients/:id', (req, res) => {
    const id = req.params.id
    const nome = req.body.nome
    const client = clients.filter(value => value.id == id)
    client[0].nome = nome
    res.json(client)
})

app.delete('/clients/:id', (req, res) => {
    const id = req.params.id
    clients = clients.filter(value => value.id != id)
    res.json(clients)
})

app.listen(3000)