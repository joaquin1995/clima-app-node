
// const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
        direccion:{
            alias: 'd',
            desc: 'Direccion de la cuidad pra obtener el clima',
            demand: true
        }
}).argv;


let getInfo = async(direccion) =>{
    try {
        let coors = await lugar.getLugarLatLong(direccion);
        let temp = await clima.getClima(coors.lat,coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;    
    } catch (e) {
        return `No se puede Determinar el clima en ${direccion}`;
    }
    
}

getInfo(argv.direccion)
.then(mensaje => console.log(mensaje))
.catch(e => console.log(e))



