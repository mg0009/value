const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Yeh endpoint Android app call karega
app.get('/api/dialog-text', (req, res) => {
    // Yahan apna dynamic text daal sakte ho (database, file, ya hardcode)
    const dialogText = `Welcome to WeSpy!\n\nThis is your remote dialog message from the render server.\n\nPlease read carefully before proceeding.\n\nCurrent Time: ${new Date().toLocaleString()}`;

    // Optional: Agar title + message dono chahiye toh JSON bhej sakte ho
    // res.json({ title: "Notice", message: dialogText });

    // Abhi simple plain text bhej rahe hain (Android code ke hisaab se)
    res.setHeader('Content-Type', 'text/plain');
    res.send(dialogText);
});

// Extra route for testing
app.get('/', (req, res) => {
    res.send('Render Server is Running ✅<br><br>Try: <a href="/api/dialog-text">/api/dialog-text</a>');
});

app.listen(PORT, () => {
    console.log(`🚀 Render Server running on http://localhost:${PORT}`);
    console.log(`Android dialog endpoint → http://localhost:${PORT}/api/dialog-text`);
});
