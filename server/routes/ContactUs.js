const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const { contact } = require("../controllers/ContactUs");

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,               
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

router.post("/contactUs", contactLimiter, contact);

module.exports = router;