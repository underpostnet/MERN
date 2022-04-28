
import API_URL  from "../global.service";
import axios from "axios";

class LibrosService {

    constructor(){
        this.SERVICE_URL = API_URL + '/libros';
    }

    async getLibros() {
        return new Promise((resolve, reject)=>
        axios.get(this.SERVICE_URL)
          .then( response => {
            console.log('success getLibros', response);
            resolve(reponse);
          })
          .catch( error => {
            console.log('error getLibros', error);
            reject(error);
          }));
    }

    async postLibro(postObj) {
        return new Promise((resolve, reject)=>
        axios.post(this.SERVICE_URL, postObj)
          .then( response => {
            console.log('success postLibro', response);
            resolve(reponse);
          })
          .catch( error => {
            console.log('error postLibro', error);
            reject(error);
          }));
    }

    async getLibro(id) {
        
    }

    async updateLibro(postObj, id){
       
    }

    async deleteLibro(id){
        
    }

}

export default LibrosService;