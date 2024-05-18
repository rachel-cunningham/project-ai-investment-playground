router = require("express").Router({ mergeParams: true });
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

router.route("/:username")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.deleteUser)
    .all(methodNotAllowed);

module.exports = router;