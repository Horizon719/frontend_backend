import Loader from "./Loader.js";

class SorView{

    #obj={}
    #index;
    constructor(obj, szuloElem, index){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#sor();

        this.sorElem = this.szuloElem.children("tr:last-child");
        this.modosit = this.sorElem.children("td").children(".modosit");
        this.trashElem = this.sorElem.children("td").children(".trash");
        $(this.modosit).on("click", () =>{
            this.#esemenyTrigger("modosit");
            new Loader($(".loader"));
        })
    
        $(this.trashElem).on("click", () =>{
            this.#esemenyTrigger("delete");
            new Loader($(".loader"));
        })
    }

    #sor(){
        let txt = `<tr>`; 
        for (let x in this.#obj) {
            if (x != "kesz") {
                txt+=`<td>${this.#obj[x]}</td>`;
            }
        }
        txt+=`<td><i class="fa fa-pencil modosit"></i><i class="fa fa-trash trash"></i></td><td></td></tr>`;
        this.szuloElem.append(txt);
    }

    #esemenyTrigger(esemenyneve){
        const esemenyem = new CustomEvent(esemenyneve,
            {detail:this.#obj})

        window.dispatchEvent(esemenyem);
    }


} export default SorView