const mongoose = require('mongoose')
const Schema = mongoose.Schema

const novaPostagem = new Schema({
      
        titlePoste:{
            type:String,
            require:true
        }, 
        conteudo:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        nome:{
            type:String,
            require:true
        },
       
        apelido:{
            type:String,
            require:true
        },
       
        
})

mongoose.model("postagem",novaPostagem)