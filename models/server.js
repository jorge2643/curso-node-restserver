const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        //Midlewares
        this.midlewares();

        //Rutas de aplicación
        this.routes();
    }


    //Midlewares
    midlewares(){

        //Midleare de cors 
        this.app.use(cors());

        //Lectura y parseo del body 
        this.app.use(express.json());

        //Directorio público 
        this.app.use(express.static('public'));

    }

    //Defino las rutas que considero necesarias
    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    //Método para escuchar el puerto
    listen(){
        this.app.listen( this.port, () =>{
            console.log('Sevidor corriendo en puerto', this.port);
        })
    }

}

module.exports = Server;
