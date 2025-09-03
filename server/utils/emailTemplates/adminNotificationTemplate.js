
module.exports = function adminNotificationTemplate(
  firstName,
  lastName,
  email,
  contactNumber,
  message
) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
      .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
      .header { background: #0f172a; color: #ffffff; padding: 20px; text-align: center; }
      .header h2 { margin: 0; font-size: 20px; }
      .content { padding: 20px; color: #333333; }
      .content p { margin: 10px 0; font-size: 14px; }
      .content strong { color: #0f172a; }
      .footer { background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #555555; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header"><h2>New Contact Query - Portfolio</h2></div>
      <div class="content">
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p style="font-size: 13px; color: #666;">
          This query was submitted via the contact form on your portfolio website.
        </p>
      </div>
      <div class="footer">&copy; ${new Date().getFullYear()} MD Akram | Portfolio Contact System</div>
    </div>
  </body>
  </html>
  `;
};
