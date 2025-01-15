const route = require('express').Router();
const { userRegister, userLogin } = require('../controllers/UserController');
// middleware
const { authUser } = require('../middlewares/AuthUser');

route.post('/register', userRegister);
route.post('/login',authUser ,userLogin);

module.exports = route;