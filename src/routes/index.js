const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html'));  para index.html
    res.render('index.html', { title: 'FERRETERIAS'});
});

router.get('/about', (req, res) => {
    res.render('about.html', { title: 'NOSOTROS'});
});

router.get('/index', (req, res) => {
    res.render('index.html', { title: 'FERRETERIAS'});
});

router.get('/about.html', (req, res) => {
    res.render('about.html', { title: 'NOSOTROS'});
});

router.get('/index.html', (req, res) => {
    res.render('index.html', { title: 'FERRETERIAS'});
});

router.get('/crearSolicitud.html', (req, res) => {
    res.render('crearSolicitud.html', { title: 'CREAR SOLICITUD'});
});

router.get('/productosFerreteriaDondeJuan.html', (req, res) => {
    res.render('productosFerreteriaDondeJuan.html', { title: 'DONDE JUAN'});
});

router.get('/productosFerreteriaElMaestro.html', (req, res) => {
    res.render('productosFerreteriaElMaestro.html', { title: 'EL MAESTRO'});
});

router.get('/productosFerreteriaMCferreteria.html', (req, res) => {
    res.render('productosFerreteriaMCferreteria.html', { title: 'MC FERRETERIA'});
});

router.get('/productosFerreteriaOliver.html', (req, res) => {
    res.render('productosFerreteriaOliver.html', { title: 'MC FERRETERIA'});
});
module.exports = router;