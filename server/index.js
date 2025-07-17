
const express = require("express");
const app = express();

const userRoute = require("./routes/User");
const contactRoute = require("./routes/ContactUs");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

database.connect();
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
    })
);

// cloudinary connection established and routes
cloudinaryConnect();
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/contact", contactRoute);

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running...",
    });
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
