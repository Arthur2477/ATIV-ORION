const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', function (req, res) {
    res.send('Rota Principal')
})

app.get('/hello', function (req, res) {
    res.send('Chegou a resposta')
})

app.get('/nome', function (req, res) {
    res.send('Orion Teles de Mesquita')
})

app.post('/lista1/ex1', function (req, res) {
    
console.log (req.body.total)

    const total = Number (req.body.total)
    const brancos = Number (req.body.brancos)
    const nulos = Number (req.body.nulos)
    const validos = Number (req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}
    if (soma > total) {

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "Asoma dos votos não pode passar o total de eleitores"
        }

        res.status(400).json(retorno)

    } else { 

        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = {percBranco, percNulos, percValidos}
    }
})

app.listen(3000, function () {
    console.log('Server UP port 3000')
})