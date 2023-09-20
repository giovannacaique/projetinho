//localhost:8080
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Estou dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs');


//Estou definindo a pasta de arquivos estaticos
app.use(express.static('public'));

app.listen(8080, () => {
    console.log("Está rodando na porta 8080");
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/produto", (req, res) => {
    res.render("produto");
});

app.post("/salvarProduto", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    //res.render("produto");
    res.send("Form recebido! titulo: " + titulo + "<br>" + "Descroção: " + "<br>" + descricao);
});