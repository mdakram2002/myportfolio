const Contact = require("../models/ConstactUs");
const mailSender = require("../utils/mailSender");
const confirmationTemplate = require("../utils/emailTemplates/confirmationTemplate");
const adminNotificationTemplate = require("../utils/emailTemplates/adminNotificationTemplate");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 60;
const MAX_MESSAGE_LENGTH = 5000;

exports.contact = async (req, res) => {
  try {
    const { firstName, lastName, email, contactNumber, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "First name, last name, email, and message are required.",
      });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    if (firstName.length > MAX_NAME_LENGTH || lastName.length > MAX_NAME_LENGTH) {
      return res.status(400).json({
        success: false,
        message: "First name and last name must be under 60 characters.",
      });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        success: false,
        message: "Message is too long. Please keep it under 5000 characters.",
      });
    }

    if (contactNumber && !/^[0-9]{8,10}$/.test(contactNumber)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid contact number.",
      });
    }

    // for k6 load testing, we don't want to spam the database or send emails, so we skip those steps if the request is coming from a load test
    const isLoadTest =
      req.headers["x-load-test"] &&
      req.headers["x-load-test"] === process.env.LOAD_TEST_SECRET;

    const contactEntry = isLoadTest
      ? { _id: "load-test-skip" }
      : await Contact.create({ firstName, lastName, email, contactNumber, message });

    if (!isLoadTest) {
      const emailResults = await Promise.allSettled([
        mailSender(email, "Query Received - Portfolio", confirmationTemplate(firstName)),
        mailSender(
          process.env.ADMIN_EMAIL,
          "New Contact Form Submission - Portfolio",
          adminNotificationTemplate(firstName, lastName, email, contactNumber, message)
        ),
      ]);

      const emailFailed = emailResults.some((r) => r.status === "rejected");
      if (emailFailed) {
        console.error(
          "One or more contact-form emails failed to send:",
          emailResults.filter((r) => r.status === "rejected").map((r) => r.reason)
        );
      }
    }

    return res.status(200).json({
      success: true,
      message: "Your query has been submitted successfully. A confirmation email has been sent to you.",
    });
  } catch (error) {
    console.error("Error in Contact Us Controller:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};