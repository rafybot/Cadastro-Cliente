const express = require('express');

const app = express();




//esta deve ser sempre a última linha ao usar o express
app.listen(8080, function() {
    console.log("Funcionando em http://localhost:8080")
});