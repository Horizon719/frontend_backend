class KartyaView{

    #obj={}
    #index;
    #publicE;
    #buttonElem;
    constructor(obj, szuloElem, index, publicE){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#publicE = publicE;
        this.#sor();
        this.#buttonElem = szuloElem.children("div:last-child").find("button");
        this.#buttonElem.on("click", ()=>{
            if (this.#publicE) {
                this.#esemenyTrigger("kivalaszt");
            } else {
                this.#esemenyTrigger("kivalasztTorol");
            }
        });
    }

    #sor(){
        let txt = `<div class="card col-lg-3 col-md-4 col-sm-6 p-0">`; 
        txt+=`<div class="card-header"><h4>${this.#obj.writer_id}</h4></div>`;
        txt+=`<div class="card-body"><p>${this.#obj.nev}</p><br><p>${this.#obj.szul}</p></div>`;
        if(this.#publicE){
            txt+=`<div class="card-footer"><button class="show" id="${this.#index}">Kiválaszt</button></div>`;
        } else {
            txt+=`<div class="card-footer"><button class="delete" id="${this.#index}">Töröl</button></div>`;
        }
        this.szuloElem.append(txt);
    }

    #esemenyTrigger(esemenyneve){
        const esemenyem = new CustomEvent(esemenyneve,
            {detail:this.#obj})
        window.dispatchEvent(esemenyem);
    }


} export default KartyaView