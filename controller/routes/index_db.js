const db = require("./db");

async function selectUsers() {
    console.log('SELECT * FROM USUARIO');
    const usuarios = await db.selectUsuario();
    console.log(usuarios);
}

async function insertUser() {
    console.log('INSERT INTO USUARIO');
    const result = await db.insertUsuario({nome: 'Zé', senha: 'ze123'});
    console.log(result);
}

async function deleteUser() {
    console.log('DELETE INTO USUARIO');
    const result = await db.deleteUsuario(2);
    console.log(result);
}

async function updateUser() {
    console.log('UPDATE USUARIO');
    const result = await db.updateUsuario(3, {nome: 'Zé José', senha: 'zeze123'});
    console.log(result);
}

selectUsers();