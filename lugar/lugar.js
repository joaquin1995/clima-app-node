const axios = require('axios');

const getLugarLatLong = async (dirreccion) =>{

    let encodeUrl = encodeURI(dirreccion);

    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)
        
    if(res.data.status === 'ZERO_RESULTS'){
        throw new Error(`no hay resultados para la cuidad ${dirreccion}`);
        return;

    }
                let location = res.data.results[0];
                let cooors = location.geometry.location;
    
                // console.log('Dirreccio:',location.formatted_address);
                // console.log('lat:',cooors.lat);
                // console.log('lng:',cooors.lng);
    return {
        direccion: location.formatted_address,
        lat: cooors.lat,
        lng:cooors.lng
    }
}


module.exports = {
    getLugarLatLong
}