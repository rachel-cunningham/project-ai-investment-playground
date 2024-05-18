router = require("express").Router({ mergeParams: true });
const usersController = require("./users.controller");
const goalsController = require("../goals/goals.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// USER INFO
router
    .route("/")
    .get(usersController.list)
    .post(usersController.create)
    .all(methodNotAllowed);

router
    .route("/:username")
    .get(usersController.read)
    .put(usersController.update)
    .patch(usersController.patch)
    .delete(usersController.deleteUser)
    .all(methodNotAllowed);

// USER GOALS
router
    .route("/:userId/goals")
    .get(goalsController.list)
    .post(goalsController.create)
    .all(methodNotAllowed);

router
    .route("/:userId/goals/:goalId")
    .get(goalsController.read)
    .all(methodNotAllowed);

module.exports = router;
