
const express = require("express");
const router = express.Router();
const {
    logIn,
    signUp,
    sendOTP,
    logOut,
    changePassword,
} = require("../controllers/Auth");

const {
    resetPasswordToken,
    resetPassword,
} = require("../controllers/ResetPassword");
const { auth } = require("../middlewares/auth");


router.post("/login", logIn);
router.post("/signUp", signUp);
router.post("/sendOTP", sendOTP);
router.put("/change-password", auth, changePassword);
router.delete("/logOut", logOut);

router.post("/reset-password", resetPassword);
router.post("/resetPasswordToken", resetPasswordToken);

module.exports = router;
