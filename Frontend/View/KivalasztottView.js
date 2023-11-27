import Loader from "./Loader.js";
import KartyaView from "./KartyaView.js";

class KivalasztottView{
    #lista=[];
    #szuloElem;
    #loader;
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.#loader = new Loader($(".loader"));
        this.#loader.remove();
        this.#szuloElem.append(`<div class="container mt-3 row">`);
        this.divElem = this.#szuloElem.children("div");
        this.megjelenit();
        this.#szuloElem.append(`</div>`);
    }

    megjelenit(){
        this.#lista.forEach((element, index) => {
            new KartyaView(element, this.divElem, index, false);
        });
    }
} export default KivalasztottView