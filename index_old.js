const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(meuJson())
app.use(express.json())

function meuJson () {
    return (req, res, next) => {
        console.log('Meu middleware...')
        next()
    }
}

app.post('/:valor', (req, res, next) => {
    console.log('Func 0')
    next()
})

app.post('/:valor', (req, res, next) => {
    console.log('Func 1')
    // res.status(200).send(`<h1>Meu Backend = ${req.params.valor} + ${req.query.nome}</h1>`)
    // res.status(200).send(`Meu Backend = ${req.params.valor} + ${JSON.stringify(req.body)}`)
    res.status(200).send(`Meu Backend = ${req.params.valor} + ${req.body.dependentes[0].nome}`)
    // next()
})

app.post('/:valor', (req, res) => {
    console.log('Func 2')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})