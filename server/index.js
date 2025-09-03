
const express = require("express");
const contactRoute = require("./routes/ContactUs");
const database = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
database.connect();

const corsOptions = {
    origin: ["http://localhost:5173", "https://mdakram-portfolio-green.vercel.app"],
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
