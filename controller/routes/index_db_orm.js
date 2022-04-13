(async () => {
    const database = require('./db_orm')
    const Cliente = require('./cliente')

    console.log('==================== Criar tabela ====================')
    const resultado = await database.sequelize.sync();
    console.log(resultado);
})();