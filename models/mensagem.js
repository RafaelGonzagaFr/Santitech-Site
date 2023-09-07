const db = require('./db')

const Mensagem = db.sequelize.define('mensagens', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Mensagem.sync({force: true}) 
module.exports = Mensagem;