const express = require("express");
const router = express.Router();

let users = require("../users");

// Vamos criar um CRUD com os seguintes endpoints que, usando o Postman, nos permitam:
// Criar uma rota ‘/api/users’ que permita criar, ler, deletar e atualizar informações dos usuários.
// Os usuário devem ter a propriedade username, email e password.

// Crie um endpoint que use o método:

// 1. POST para adicionar um usuário seguindo as propriedades citadas.
router.post('/users', (req, res) => {
   const content = req.body;
   const newContent = [...users, ...content];
   return res.status(200).json(newContent);
});

// 2. PUT para modificar informações de um usuário.
router.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = req.body;
    users.map((user) => {
      if(user.id === id) {
        return res.status(200).json(content);
      }
    });
    return res.status(200).json(users);
});

// 3. DELETE para deletar um usuário.
router.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const findUser = users.find((user) => {
      user.id === id;
    });

    if(!findUser) {
        return res.status(404).json({ "message" : "Not found" })
    }

    const deletedUser = users.filter((user) => {
      user.id !== id;
    });

    return res.status(200).json(deletedUser);
});

// 4. GET para verificar a lista de usuários.
router.get("/users", (req, res) => {
    return res.status(200).json(users);
});

module.exports = router;
