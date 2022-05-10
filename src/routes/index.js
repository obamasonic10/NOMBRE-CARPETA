const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html'));  para index.html
    res.render('index.html', { title: 'FERRETERIAS'});
});

router.get('/about', (req, res) => {
    res.render('about.html', { title: 'NOSOTROS'});
});

module.exports = router;