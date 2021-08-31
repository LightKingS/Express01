const { response } = require('express');
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
    const client = clients.find(value => value.id == req.params.id)
    if (!client){
        res.status(404).json("Cliente não encontrado")
    }
    res.status(200).json(client)
})

app.post('/clients', (req, res) => {
    const client = req.body
    clients.push(client)
    res.status(201).json(req.body)
})

app.put('/clients/:id', (req, res) => {
    const id = req.params.id
    const nome = req.body.nome
    const client = clients.filter(value => value.id == id)
    if (!client){
        res.status(404).json("Cliente não encontrado")
    }
    client[0].nome = nome
    res.status(200).json(client)
})

app.delete('/clients/:id', (req, res) => {
    const client = clients.find(value => value.id == req.params.id)
    const index = clients.findIndex(value => value.id == req.params.id)
    if(index == -1){
        res.status(404).json("Cliente não encontrado")
    } else {
        clients.splice(index, 1)
        res.status(204).json(client)
    }
})

app.listen(3000)