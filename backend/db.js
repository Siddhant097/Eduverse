const mongoose = require("mongoose");
require("dotenv").config();

// Use environment variable for MongoDB URI
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/elearning';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

const db = mongoose.connection;

db.on("error", (error) => console.error("MongoDB Connection Error:", error));
db.once("open", () => console.log("Connection to MongoDB established"));

module.exports = {
    db
};
