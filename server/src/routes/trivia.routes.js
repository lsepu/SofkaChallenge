const { Router } = require("express");
const router = Router();

const questionController = require("../controllers/questions.controller.js");

const userController = require("../controllers/users.controller.js");

router.get("/:cat", questionController.getQuestion);

router.post("/", questionController.createQuestion);

router.get("/user/:name", userController.getUser);

router.post("/user", userController.createUser);

router.put("/user/:name", userController.updateUser);

router.get("/user/ranking/all", userController.getRanking);


module.exports = router;
