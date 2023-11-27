import DataService from "../Model/DataService.js";
import KivalasztottView from "../View/KivalasztottView.js";
import HibaView from "../View/HibaView.js";
import Loader from "../View/Loader.js";

class KivalasztottController{
    loader;
    #dataService
    constructor(){
        this.#dataService = new DataService();
        this.esemenyKezeles();
    }

    init(){
        
        this.loader = new Loader($(".loader"));
        this.#dataService.getData("api/choosens", this.megjelenit, this.hibaMegjelenit);
    }
    
    megjelenit(lista){
        new KivalasztottView(lista, $(".kivalasztott"));
    }

    hibaMegjelenit(error){
        new HibaView(error, $(".kivalasztott"));
    }

    esemenyKezeles(){
        $(window).on("kivalaszt", (event) => {
            const DATAS = event.detail;
            this.#dataService.postAxiosData("api/choose", DATAS);
        });
        $(window).on("kivalasztTorol", (event) => {
            console.log(event.detail);
            const DATAS = event.detail.writer_id;
            this.#dataService.deleteAxiosData("api/deletechoosen", DATAS);
        });
    }

} export default KivalasztottController