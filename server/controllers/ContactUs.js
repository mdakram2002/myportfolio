
const Contact = require("../models/ConstactUs");
const mailSender = require("../utils/mailSender");
const confirmationTemplate = require("../utils/emailTemplates/confirmationTemplate");
const adminNotificationTemplate = require("../utils/emailTemplates/adminNotificationTemplate");

exports.contact = async (req, res) => {
    try {
        const { firstName, lastName, email, contactNumber, message } = req.body;

        if (!firstName || !lastName || !email || !contactNumber || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        const contactEntry = await Contact.create({
            firstName,
            lastName,
            email,
            contactNumber,
            message,
        });

        // Email to User
        await mailSender(
            email,
            "Query Received - Portfolio",
            confirmationTemplate(firstName)
        );

        // Email to Admin
        await mailSender(
            process.env.ADMIN_EMAIL,
            "New Contact Form Submission - Portfolio",
            adminNotificationTemplate(
                firstName,
                lastName,
                email,
                contactNumber,
                message
            )
        );

        return res.status(200).json({
            success: true,
            message:
                "Your query has been submitted successfully. A confirmation email has been sent to you.",
            data: contactEntry,
        });
    } catch (error) {
        console.error("Error in Contact Us Controller:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again later.",
            error: error.message,
        });
    }
};
