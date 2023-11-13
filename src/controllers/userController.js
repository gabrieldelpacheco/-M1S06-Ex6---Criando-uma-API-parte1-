const { get } = require("../routes/userRoutes");

let users = [];

module.exports = {
    create(request, response) {
        const { nome, idade, cargo, senha } = request.body;

        if (!nome || !idade || !cargo || !senha) {
            response.status(406).json({ mensagem: "Está faltando dados para concluir a operação" });
        } else if (idade < 21) {
            response.status(400).json({ mensagem: "Usuário não possui idade suficiente" });
        } else {
        users.push({
            id: users.length + 1,
            nome,
            idade,
            cargo,
            senha
        });
        response.status(200).json({ mensagem: "Criado com sucesso" });
        console.log(users);
        }
      },

    delete(request, response) {
        const id = request.params.id;

        if (!id) {
            return response.status(406).json({ mensagem: 'Está faltando dados para concluir a operação' });
        }

        const userIndex = users.findIndex(user => user.id == id);

        if (userIndex < 0) {
            return response.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        users.splice(userIndex, 1);

        return response.status(200).json({ mensagem: 'Deletado com sucesso' });
    },

    getUsuarios(request, response) {
        return response.status(200).json({ users });
    }
}