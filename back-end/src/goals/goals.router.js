const router = require("express").Router();
const controller = require("./goals.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// Routes for USER SPECIFIC goals

router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

router.route("/:goal_id").get(controller.read).all(methodNotAllowed);

module.exports = router;
