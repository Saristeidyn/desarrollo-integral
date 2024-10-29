const express = require('express');
const router = express.Router();

const blogs =[
    {titulo: 'Articulo1', autor: 'Saray Mart', contenido: 'Lorem Ipsum'},
    {titulo: 'Articulo2', autor: 'Saray Mart', contenido: 'Lorem Ipsum'},
    {titulo: 'Articulo3', autor: 'Saray Mart', contenido: 'Lorem Ipsum'},
    {titulo: 'Articulo4', autor: 'Saray Mart', contenido: 'Lorem Ipsum'},
    {titulo: 'Articulo5', autor: 'Saray Mart', contenido: 'Lorem Ipsum'},
    {titulo: 'Articulo6', autor: 'Saray Mart', contenido: 'Lorem Ipsum'}
];

router.get('/articulos', (req, res) => {
    res.render('articulos', { titulo: 'Articulos', articulos: articulos });
})