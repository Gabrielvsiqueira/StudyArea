const users = require('../mocks/users');

module.exports = {
    listUsers(request, response) {
        const { order, name } = request.query;

        let filteredUsers = users;

        // Filtra os usuários se o parâmetro "name" estiver presente
        if (name) {
            filteredUsers = filteredUsers.filter((user) =>
                user.name.toLowerCase().includes(name.toLowerCase())
            );
        }

        // Ordena os usuários com base no parâmetro "order"
        if (order) {
            filteredUsers = filteredUsers.sort((a, b) => {
                if (order === 'desc') {
                    return a.id < b.id ? 1 : -1;
                }
                return a.id > b.id ? 1 : -1;
            });
        }

        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(filteredUsers));
    },

    getUsersById(request, response) {
        const { id } = request.params;

        const user = users.find((user) => user.id === Number(id));

        if (!user) {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'User not found' }));
        } else {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(user));
        }
    },

    createUser(request, response) {
        let body = '';

        request.on('data', (chunck) => {
            body += chunck;
        });

        request.on('end', () => {
            body = JSON.parse(body);
            response.send(200, body);
            response.end(JSON.stringify({ ok: true }));
        });
    },
};
