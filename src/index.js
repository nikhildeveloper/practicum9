const express = require("express");
const cors = require('cors');
const app = express();
const port = 3828;

// Serve static files from 'public' directory
app.use(express.static('public'));
app.use(cors());

// Endpoint for addition
app.get('/get', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    const result = num1 + num2;
    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
