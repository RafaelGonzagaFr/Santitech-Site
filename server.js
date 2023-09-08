
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');


const Mensagem = require('./models/mensagem');
const Adm = require('./models/adm');

const jwt = require('jsonwebtoken')




//Template Engine
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')

//Body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=> {
    res.render('index')
})

app.post('/add', (req, res) => {
    Mensagem.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        conteudo: req.body.mensagem
    }).then(()=> {
        res.redirect('/')
    }).catch((err)=> {
        res.send(err)
    })
    
})

app.get('/login', (req,res)=> {
    res.render('login')
})

app.post('/logar', async (req,res)=> {
    const logar =  await Adm.findOne({
        attributes: ['user', 'password'],
        where: {
            user: req.body.user,
            password: req.body.password
        }})

        
    if(logar === null) {
        return res.status(400).json({
            erro: true,
            mensagem: "Dados incorretos"
        })
    } else {
        Mensagem.findAll().then((mensagens)=>{
            res.render('mensagens', {mensagens: mensagens})
        })
    }
})



app.listen(3000); 