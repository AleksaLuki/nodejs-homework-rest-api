const express = require('express')

const { validateBody } = require('../../middlewares');
const { autentificate } = require('../../middlewares/autentificate');
const { schemas } = require('../../models/user');
const ctrl = require('../../controllers/auth')

const router = express.Router()

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", autentificate, ctrl.getCurrent);

router.post("/logout", autentificate, ctrl.logout);


router.patch(
    "/id/subscription",
    autentificate,
    validateBody(schemas.updatedSub),
    ctrl.updateSub
);

module.express = router;