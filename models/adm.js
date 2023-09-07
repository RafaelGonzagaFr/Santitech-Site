const db = require('./db')

const Adm = db.sequelize.define('adms', {
    user: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    }
})

//Adm.sync({force: true}) 
module.exports = Adm;