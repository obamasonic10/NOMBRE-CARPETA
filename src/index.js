const express = require('express');
const app = express();
const path = require('path');

//SETTINGS
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//RUTAS
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html'));  para index.html
    res.render('index');
});

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});