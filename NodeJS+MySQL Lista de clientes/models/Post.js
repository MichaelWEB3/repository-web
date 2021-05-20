const bd = require('./bd')


const Post =  bd.sequelize.define('servicoodo',{
    nome:{
        type:bd.Sequelize.TEXT
    },
    email:{
        type:bd.Sequelize.TEXT
    },
    idade:{
        type:bd.Sequelize.INTEGER
    },
    servico:{
        type:bd.Sequelize.TEXT
    },
    ocamento:{
        type:bd.Sequelize.DOUBLE
    },
})

//Post.sync({force:true})

module.exports  = Post