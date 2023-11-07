
import DataService from "../Model/DataService.js";
import DataView from "../View/DataView.js";
import HibaView from "../View/HibaView.js";
import { ADATLEIRAS } from "../Model/adat.js";
import UrlapView from "../View/UrlapView.js";
import UrlapController from "./UrlapController.js";

class DataController{
    constructor(){
        new UrlapView(ADATLEIRAS, $(".urlap"));
        this.dataService = new DataService();
        this.dataService.getData("http://localhost:8000/writers", this.megjelenit, this.hibaMegjelenit);
        new UrlapController();
    }
    
    megjelenit(lista){
        new DataView(lista, $(".lista"));
    }

    hibaMegjelenit(error){
        new HibaView(error, $(".lista"));
    }

} export default DataController