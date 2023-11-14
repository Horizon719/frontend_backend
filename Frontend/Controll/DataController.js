
import DataService from "../Model/DataService.js";
import DataView from "../View/DataView.js";
import HibaView from "../View/HibaView.js";

class DataController{
    constructor(){
        this.dataService = new DataService();
        this.dataService.getData("api/writers", this.megjelenit, this.hibaMegjelenit);
    }
    
    megjelenit(lista){
        new DataView(lista, $(".lista"));
    }

    hibaMegjelenit(error){
        new HibaView(error, $(".lista"));
    }

} export default DataController