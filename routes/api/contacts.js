const express = require("express");
const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();
const controllers = require("../../controllers/contacts");

router.get("/", controllers.getAll);

router.get("/:id", isValidId, controllers.getContact);

router.post("/", validateBody(schemas.addSchema), controllers.addNewContact);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  controllers.changeContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);
router.delete("/:id", controllers.deleteContact);
module.exports = router;