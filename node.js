const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Form Data Received:', formData);
    res.send('Thank you for contacting us! We will get back to you shortly.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
