import Loader from "./Loader.js";

class KartyaView{

    #obj={}
    #index;
    constructor(obj, szuloElem, index){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#sor();

        this.sorElem = this.szuloElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.xElem = this.sorElem.children("td").children(".x");
        this.trashElem = this.sorElem.children("td").children(".trash");
       
    }

    #sor(){
        let txt = `<div class="card col-lg-3 col-md-4 col-sm-6 p-0">`; 
        txt+=`<div class="card-header"><h4>${this.#obj.writer_id}</h4></div>`;
        txt+=`<div class="card-body"><p>${this.#obj.nev}</p><br><p>${this.#obj.szul}</p></div>`;
        txt+=`<div class="card-footer"><button class="show" id="${this.#index}">Kiválaszt</button></div>`;
        this.szuloElem.append(txt);
    }

    #esemenyTrigger(esemenyneve){
        const esemenyem = new CustomEvent(esemenyneve,
            {detail:this.#obj})

        window.dispatchEvent(esemenyem);
    }


} export default KartyaView