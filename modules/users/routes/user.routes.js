const express = require("express");
const {getAllUsers,addNewUser} = require("../controller/user.controller");
const router = express.Router();


const validateRequest = require("../../../common/middleware/validateRequest");
const {addNewUserSchema} = require("../joi/userValidation");

router.get("/users" , getAllUsers)
router.post("/addNewUser", validateRequest(addNewUserSchema) ,addNewUser)


module.exports = router;