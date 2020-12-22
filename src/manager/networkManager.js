import React from 'react';
import Axios from 'axios'

const getData=() => {

  return new Promise((resolve)=>{
     const fetch = async () => {
      await Axios.all([
          Axios.get('http://127.0.0.2:8080/https://gizmo.rakuten.tv/v3/lists/populares-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es'),
          Axios.get('http://127.0.0.2:8080/https://gizmo.rakuten.tv/v3/lists/estrenos-para-toda-la-familia?classification_id=5&device_identifier=web&locale=es&market_code=es'),
          Axios.get('http://127.0.0.2:8080/https://gizmo.rakuten.tv/v3/lists/estrenos-imprescindibles-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es'),
          Axios.get('http://127.0.0.2:8080/https://gizmo.rakuten.tv/v3/lists/estrenos-espanoles?classification_id=5&device_identifier=web&locale=es&market_code=es'),
          Axios.get('http://127.0.0.2:8080/https://gizmo.rakuten.tv/v3/lists/si-te-perdiste?classification_id=5&device_identifier=web&locale=es&market_code=es'),
          Axios.get('http://127.0.0.2:8080/https://gizmo.rakuten.tv/v3/lists/especial-x-men?classification_id=5&device_identifier=web&locale=es&market_code=es'),
          Axios.get('http://127.0.0.2:8080/https://gizmo.rakuten.tv/v3/lists/nuestras-preferidas-de-la-semana?classification_id=5&device_identifier=web&locale=es&market_code=es')
      ])
      .then(function (responseArr) {
        resolve(responseArr);
        
      });
  }
  fetch();

  });

}; export default getData


export const getContentDetail =  (url) => {

  return new Promise((resolve)=>{
    const get = async () => {
      await Axios.get(url).then(
        (response)=> {resolve(response)}
        );
    }
    get();
  })

} 