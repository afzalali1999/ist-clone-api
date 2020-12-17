const express = require("express");
const fs = require ('fs');
const path = require('path');

const app = express();

// app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/about', (req, res) => {
    fs.readFile('./data/about.json', 'utf8', (error, data) => {
        if (error) throw error;

        res.send(JSON.parse(data));
    })
});

app.get('/api/degrees', (req, res) => {
    fs.readFile('./data/degrees.json', 'utf8', (error, data) => {
        if (error) throw error;

        res.send(JSON.parse(data));
    })
});

app.get('/api/minors', (req, res) => {
    fs.readFile('./data/minors.json', 'utf8', (error, data) => {
        if (error) throw error;

        res.send(JSON.parse(data));
    })
});

app.get('/api/employers', (req, res) => {
    fs.readFile('./data/employers.json', 'utf8', (error, data) => {
        if (error) throw error;

        res.send(JSON.parse(data));
    })
});

app.get('/api/people', (req, res) => {
    fs.readFile('./data/people.json', 'utf8', (error, data) => {
        if (error) throw error;

        res.send(JSON.parse(data));
    })
});

app.get('/api/research', (req, res) => {
    fs.readFile('./data/research.json', 'utf8', (error, data) => {
        if (error) throw error;

        res.send(JSON.parse(data));
    })
});

app.get('/api/footer', (req, res) => {
    fs.readFile('./data/footer.json', 'utf8', (error, data) => {
        if (error) throw error;

        res.send(JSON.parse(data));
    })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})