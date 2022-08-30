const userType = require('../controllers/uesrType')

const route = require('express').Router()

/// userType route
route.post("/userType/insert", userType.insertUserType);

module.exports = route