const userController = require("./controllers/userController");

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: userController.listUsers,
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: userController.getUsersById,
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: userController.createUser,
    }
]