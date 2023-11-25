import Loader from "../View/Loader.js";

class DataService{
    #loader;
    constructor(){
        axios.defaults.baseURL = "http://localhost:8000/";
        this.#loader = new Loader($(".loader"));
    }
    getData(vegpont, callback, hibaCallback){
        axios.get(vegpont)
        .then(function (response) {
            callback(response.data);
        })
        .catch(function (error) {
            hibaCallback(error);
        })
        .finally(function () {
        });
    }

    postAxiosData (url, data) { 
        console.log(data)
        axios
            .post(url, data)
            .then((response) => {
                console.log("RESP", response);
                this.#loader.keresUtan();
            })
            .catch((error) => {
                console.log("hiba", error);
                this.#loader.keresUtan();
            });
    }

    putAxiosData (url, data, id) { 
        console.log(data)
        console.log(`${url}/${id}`);
        axios
            .put(`${url}/${id}`, data)
            .then((response) => {
                console.log("RESP", response);
                this.#loader.keresUtan();
            })
            .catch((error) => {
                console.log("hiba", error);
                this.#loader.keresUtan();
            });
    }

    deleteAxiosData(url, id) {
        console.log(`${url}/${id}`);
        axios
            .delete(`${url}/${id}`)
            .then((response) => {
                console.log("RESP", response);
                this.#loader.keresUtan();
            })
            .catch((error) => {
                console.log("hiba", error);
                this.#loader.keresUtan();
            });
    }

} export default DataService