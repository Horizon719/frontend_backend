import DataService from "../Model/DataService.js";
import PublikusView from "../View/PublikusView.js";
import HibaView from "../View/HibaView.js";
import Loader from "../View/Loader.js";

class PublikusController{
    loader;
    constructor(){
        
    }

    init(){
        this.dataService = new DataService();
        this.loader = new Loader($(".loader"));
        this.dataService.getData("api/writers", this.megjelenit, this.hibaMegjelenit);
    }
    
    megjelenit(lista){
        new PublikusView(lista, $(".kartya"));
    }

    hibaMegjelenit(error){
        new HibaView(error, $(".kartya"));
    }

} export default PublikusController