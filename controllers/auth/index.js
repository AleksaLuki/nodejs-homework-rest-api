const { ctrlWrapper } = require('../../helpers');
const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSub = require('./updateSub');
const updateAvatar = require('./updateAvatar');



module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateSub: ctrlWrapper(updateSub),
    updateAvatar: ctrlWrapper(updateAvatar),
}