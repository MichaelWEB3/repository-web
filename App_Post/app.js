const express = require('express')
const mongoose = require('mongoose')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
require('./models/addUsuario')
require('./models/addpostagem')
const novoUsuario = mongoose.model('criaUsuario')
const postagens = mongoose.model('postagem')
const bcrypt = require("bcryptjs")
const app = express()
const passport = require("passport")
require("./confing/auth")(passport)

//handlebars confing 
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')


//passport
app.use(passport.initialize())

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//mongodb

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/posta_tudo").then(() => {
    console.log("conectado com mongo")
}).catch((e) => console.log("erro" + e))



app.get("/cadastrar", (req, resp) => {
    resp.render("criaUsuario")
    //redirecion
})

app.post("/criarUsuario", (req, resp) => {




    novoUsuario.findOne({ email: req.body.email }).then((usuario) => {
        if (usuario) {
            const erro = "email de usuario ja existente"
            resp.render("erro", { erro: erro })
        } else {
            const novo = new novoUsuario({
                email: req.body.email,
                senha: req.body.senha,
                nome: req.body.nome,
                apelido: req.body.apelido

            })
            bcrypt.genSalt(10, (erro, salt) => {
                bcrypt.hash(novo.senha, salt, (erro, hash) => {
                    if (erro) {
                        console.log("erro hash" + erro)
                        const erro = "erro hash de usuario ja existente"
                        resp.render("erro", { erro: erro })
                    }

                    novo.senha = hash


                    novo.save().then(() => {
                        resp.redirect("/login")
                    }).catch((e) => {
                        const erro = "erro ao salvar"
                        resp.render("erro", { erro: erro })
                    })
                })
            })


        }
    })



})

app.get("/", (req, resp) => {
    postagens.find().lean().then((post) => {

        resp.render('home', { post: post })
    }).catch((erro) => {
        const error = "erro"
        resp.render("./erro", { error })
    })
})

app.get("/login", (req, resp) => {
    resp.render("login")
    //redirecion
})
app.get("/erro", (req, resp) => {
    resp.render("erro")
    //redirecion
})

app.post('/perfil', passport.authenticate('local', {
    successRedirect: '',
    failureRedirect: '/erro',
    session: false
}), (req, resp) => {

    //fazendo busca pelo id
    novoUsuario.findOne({ email: req.body.email }).lean().then((info) =>

        resp.render('perfil', { info: info })
        
        
        ).catch((erro) => {
            const error = "erro"
            resp.render("erro", { erro: erro })

        })

}

);




app.post('/perfil/addPoste/:email/:nome/:apelido', (req, resp) => {

    const novo = new postagens({
        titlePoste: req.body.titulo,
        conteudo: req.body.conteudo,
        email: req.params.email,
        nome: req.params.nome,
        apelido: req.params.apelido,


    })


    novo.save().then(() => {

        postagens.findOne({ email: req.params.email }).lean().then((info) => {

            const maisNovo = new novoUsuario({
                postagem: info._id

            });
            maisNovo.save().then(() => {
                resp.redirect("/")
            })

        })


    }).catch((e) => {
        const erro = "erro ao salvar"
        resp.render("erro", { erro: erro })
    })



})







const porta = 8081

app.listen(porta, () => {
    console.log("serivdor aberto na porta", porta)
})