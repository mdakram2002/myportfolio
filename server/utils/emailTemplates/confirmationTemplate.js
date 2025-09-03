
module.exports = function confirmationTemplate(firstName) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body { font-family: Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0; }
      .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
      .header { background: #0f172a; color: #ffffff; padding: 20px; text-align: center; }
      .header h2 { margin: 0; font-size: 20px; }
      .content { padding: 20px; color: #333333; }
      .content p { margin: 12px 0; font-size: 14px; }
      .content strong { color: #0f172a; }
      .footer { background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #555555; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header"><h2>Thank You for Reaching Out!</h2></div>
      <div class="content">
        <p>Hello <strong>${firstName}</strong>,</p>
        <p>We have successfully received your query from the portfolio website.</p>
        <p>Our team will get back to you shortly with a response.</p>
        <p>Thank you for taking the time to connect with us.</p>
        <p>Best Regards,<br><strong>MD Akram</strong><br>Portfolio Team</p>
      </div>
      <div class="footer">&copy; ${new Date().getFullYear()} MD Akram | Portfolio Contact System</div>
    </div>
  </body>
  </html>
  `;
};
