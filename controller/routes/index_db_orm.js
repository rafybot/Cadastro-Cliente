(async () => {
    const database = require('./db_orm')
    const Cliente = require('./cliente')

    console.log('==================== Criar tabela ====================')
    const resultado = await database.sequelize.sync();
    console.log(resultado);

    console.log('==================== Criar registro ====================')
    const inserirCliente = await Cliente.create({
        nome: 'João',
        idade: 18,
        endereco: 'Rua Paulista, n 100'
    })
    console.log(inserirCliente);
})();