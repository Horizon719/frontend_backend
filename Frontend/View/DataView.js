import Loader from "./Loader.js";
import SorView from "./SorView.js";

class DataView{
    #lista=[];
    #loader;
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.#loader = new Loader($(".loader"));
        this.#loader.remove();
        szuloElem.append(`<table class="table table-hover table-bordered">`);
        this.tablaElem = szuloElem.children("table");
        this.megjelenit();
    }

    megjelenit(){
        this.tablaElem.empty();
        this.#lista.forEach((element, index) => {
            new SorView(element, this.tablaElem, index);
        });
    }
} export default DataView