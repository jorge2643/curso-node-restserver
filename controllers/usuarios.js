const {response, request} = require('express');




const usuariosGet = (req = request, res = response) => {

    //se extraen los parametros 
    const {q, nombre = 'No name', apikey} = req.query;

    //voy a devolver un tipo JSON cuando se haga el get. 
    res.json({
        //ok: true,
        msg: 'Peticion get a API - Controlador',
        q,
        nombre,
        apikey
    });
  }

 const usuariosPut = (req, res = response) => {
    //trabajar con el controlador PUT 
    const {id} = req.params;

    //voy a devolver un tipo JSON cuando se haga el get. 
    res.json({
        //ok: true,
        msg: 'Peticion put a API - Controlador',
        id
    });
  }

  const usuariosPost = (req, res = response) => {
    //quiero extraer el body de lo que me envie el front 
    const {nombre, edad} = req.body;

    //voy a devolver un tipo JSON cuando se haga el get. 
    res.json({
        //ok: true,
        msg: 'Peticion post a API - Controlador',
        nombre,
        edad
    });
  }

  const usuariosDelete = (req, res = response) => {
    //voy a devolver un tipo JSON cuando se haga el get. 
    res.json({
        //ok: true,
        msg: 'Peticion delete a API - Controlador'
    });
  }

  module. exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

  }