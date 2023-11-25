import Loader from "./Loader.js";
import NumberUrlapElem from "./NumberUrlapElem.js";
import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView{
    #leiro={}
    #urlapElemLista=[];
    #osszesElemValidE = true;
    #urlapAdat = {};
    #tipus;
    #loader;
    constructor(leiro, szuloElem, tipus){
        this.szuloElem = szuloElem;
        this.#leiro = leiro;
        this.#tipus = tipus;
        this.szuloElem.append("<form>");
        this.formElem = this.szuloElem.children("form");
        this.#urlapOsszerak();
        this.submitElem = $("#submit");
        this.editElem = $("#edit");
        this.editElem.css("display", "none");
        if (this.#tipus == "edit") {
            this.submitElem.css("display", "none");
            this.editElem.css("display", "inline");
        }
        this.submitElem.on("click", (event)=>{
            event.preventDefault();
            this.#loader= new Loader($(".loader"));
            this.#osszesElemValidE = true;
            this.#urlapElemLista.forEach(elem => {
                this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
            });
            if (this.#osszesElemValidE) {
                this.#urlapElemLista.forEach(elem => {
                    this.#urlapAdat[elem.key] = elem.value;
                });
                
                this.#esemenyLetrehozas("valid");
            } else {
                console.log("nem valid urlap");
            }
        })
        this.editElem.on("click", (event)=>{
            event.preventDefault();
            this.#urlapElemLista.forEach(elem => {
                this.#osszesElemValidE = this.#osszesElemValidE && elem.valid;
            });
            if (this.#osszesElemValidE) {
                this.#urlapElemLista.forEach(elem => {
                    this.#urlapAdat[elem.key] = elem.value;
                });
                this.#esemenyLetrehozas("update");
            } else {
                console.log("nem valid urlap");
            }
        })
    }

    #urlapOsszerak(){
        for (const key in this.#leiro) {
            switch (this.#leiro[key].tipus) {
                case "text":
                    this.#urlapElemLista.push(new TextUrlapElem(key, this.#leiro[key], this.formElem));
                    break;
                case "number":
                    this.#urlapElemLista.push(new NumberUrlapElem(key, this.#leiro[key], this.formElem));
                    break;
                default:
                    console.log("ez meg nincs meg");
                    break;
            }
        }
        let txt=`<input type="submit" id="submit" value="OK"></input>`;
        txt += `<input type="submit" id="edit" value="Módosítás"></input>`;
        this.formElem.append(txt);
    }
    
    #esemenyLetrehozas(esemenynev){
        const ESEMENYEM = new CustomEvent(esemenynev, {detail: this.#urlapAdat});
        window.dispatchEvent(ESEMENYEM);
    }

} export default UrlapView