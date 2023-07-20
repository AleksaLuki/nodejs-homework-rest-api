const express = require('express')

const { validateBody, autentificate } = require('../../middlewares');
const { schemas } = require('../../models/users');
const ctrl = require('../../controllers/auth')

const router = express.Router()

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", autentificate, ctrl.getCurrent);

router.post("/logout", autentificate, ctrl.logout);


router.patch(
    "/id/subscription",
    autentificate,
    validateBody(schemas.updateSub),
    ctrl.updateSub
);

module.express = router;