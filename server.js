const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db');
const userRoutes = require('./routes/user');
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.redirect('login.html')
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM user WHERE Username = ? AND Passkey = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ success: true, redirectUrl: '/dashboard.html' });
        } else {
            res.status(500).json({ success: false, message: 'Invalid Credentials' });
        }
    });
});

app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


