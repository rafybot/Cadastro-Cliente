const express = require('express');

const app = express();

app.get("/", function(req, resp) {
    resp.send("Bem-vindo ao app!")
});

app.get("/contato", function(req, resp) {
    resp.send("Página de <b>contato</b> do app.")
});

app.get("/contato/:nome/:cargo", function(req, resp) {
    resp.send("<h1>Olá sr(a). <b>"+ req.params.nome +"</b>.</h1>    <h2>Seu cargo é " + req.params.cargo + "</h2>")
})


//esta deve ser sempre a última linha ao usar o express
app.listen(8080, function() {
    console.log("Funcionando em http://localhost:8080")
});