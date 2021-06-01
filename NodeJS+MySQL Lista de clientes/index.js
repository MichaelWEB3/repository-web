const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const { extend } = require('lodash')
const Post = require('./models/Post')

app.engine('handlebars', handlebars({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//rotas

app.get('/', function (req, resp) {
    Post.findAll().then(function (posts) {
        resp.render(__dirname + "/views/home", { posts })
    })


})


app.post('/add', (req, resp) => {
    Post.create({
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
        servico: req.body.servico,
        ocamento: req.body.ocamento

    }).then(() => {
        resp.redirect("/")
    }).catch((erro) => {
        resp.send("erro" + erro)
    })
})


app.get('/:id',(req,resp)=>{
    Post.destroy({where:{'id': req.params.id}}).then(()=>{
        resp.redirect("/")
    }).catch((erro)=>{
        resp.send("erro"+erro)
    })
})

//abrir um servidor 
app.listen(3535, function () {
    console.log("servidor aberto porta: 3535")
})