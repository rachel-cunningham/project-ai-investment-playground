router = require("express").Router({ mergeParams: true });
const controller = require("./auth.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");


router.route("/")
    .post(controller.login)
    .get(controller.authenticateToken)
    .all(methodNotAllowed)

module.exports = router;