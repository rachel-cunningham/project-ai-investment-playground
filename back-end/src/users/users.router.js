router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/users")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

module.exports = router;