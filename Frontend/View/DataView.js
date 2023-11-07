import SorView from "./SorView.js";

class DataView{
    #lista=[]
    constructor(lista, szuloElem){
        this.#lista = lista;
        szuloElem.append(`<table class="table table-hover table-bordered">`);
        this.tablaElem = szuloElem.children("table");
        this.megjelenit();
    }

    megjelenit(){
        this.#lista.forEach((element, index )=> {
            new SorView(element, this.tablaElem, index)
        });
    }
} export default DataView