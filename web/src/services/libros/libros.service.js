
import API_URL  from "../global.service";
import axios from "axios";

export default class LibrosServices {
  

    constructor(){
      this.SERVICE_URL = API_URL + '/libros';
    }

    async getLibros() {
        return new Promise((resolve, reject)=>
        axios.get(this.SERVICE_URL)
          .then( response => {
            console.log('success getLibros', response);
            resolve(response);
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
            resolve(response);
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
      return new Promise((resolve, reject)=>
      axios.delete(this.SERVICE_URL + '/' + id)
        .then( response => {
          console.log('success deleteLibro', response);
          resolve(response);
        })
        .catch( error => {
          console.log('error deleteLibro', error);
          reject(error);
        }));
    }

}