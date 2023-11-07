
class SorView{

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
        
        if (this.#obj.kesz) {
            this.sorElem.css("background-color", "rgb(0, 206, 0)");
            this.keszElem.css("display", "none");
            this.xElem.css("display", "inline");
        } else {
            this.sorElem.css("background-color", "white");
            this.xElem.css("display", "none");
            this.keszElem.css("display", "inline");
        }
        
        $(this.keszElem).on("click", () =>{
            this.#esemenyTrigger("kesz");
        })
        
        $(this.xElem).on("click", () =>{
            this.#esemenyTrigger("megse");
        })
        
        $(this.trashElem).on("click", () =>{
            this.#esemenyTrigger("torol");
        })
    }

    #sor(){
        let txt = `<tr>`; 
        for (let x in this.#obj) {
            if (x != "kesz") {
                txt+=`<td>${this.#obj[x]}</td>`;
            }
        }
        txt+=`<td><i class="fa fa-check kesz"></i><i class="fa fa-remove x"></i></i><i class="fa fa-trash trash"></i></td><td></td></tr>`;
        this.szuloElem.append(txt);
    }

    #esemenyTrigger(esemenyneve){
        const esemenyem = new CustomEvent(esemenyneve,
            {detail:this.#index})

        window.dispatchEvent(esemenyem);
    }


} export default SorView