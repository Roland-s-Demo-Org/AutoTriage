import express from "express";
// Import helmet middleware to add security headers
import helmet from "helmet";
import { MongoClient } from "mongodb";

const app = express();
// Apply helmet middleware to set secure HTTP headers (e.g., X-Frame-Options, Content-Security-Policy)
// This helps protect against common web vulnerabilities like XSS and clickjacking
app.use(helmet());
app.use(express.json());
const PORT = 3000;

const client = new MongoClient(process.env.MONGO_URI);

app.post("/login", function (req, res) {
    const database = client.db("database");
    const Users = database.collection("users");
    // Payload:
    // req.body.name = { name: elon_musk; password: { $ne: '' }}
    // would make any user log in as elon_musk (if he has an account)
    const user = Users.findOne({
        name: req.body.name,
        password: req.body.password,
    });

    if (user) {
        res.send(`Welcome ${user}`);
    } else {
        res.send("User not found");
    }
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
