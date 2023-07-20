const express = require('express')

const { validateBody, autentificate } = require('../../middlewares');
const { schemas } = require('../../models/users');
const ctrl = require('../../controllers/auth')

const router = express.Router()

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);



router.patch(
    "/id/subscription",
    autentificate,
    validateBody(schemas.updateSub),
    ctrl.updateSub
);

module.express = router;