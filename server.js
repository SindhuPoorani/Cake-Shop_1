const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "signin.html"));
});

// Handle Sign In (Basic Validation)
app.post("/dashboard", (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
        res.sendFile(path.join(__dirname, "public", "dashboard.html"));
    } else {
        res.send("<h2>Invalid login. Please go back and try again.</h2>");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
