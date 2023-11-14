import UrlapModel from "../Model/UrlapModel.js"
import UrlapView from "../View/UrlapView.js"
import DataService from "../Model/DataService.js";

class UrlapController{
    constructor(){
        const URLAPMODEL = new UrlapModel();
        new UrlapView(URLAPMODEL.leiro,$(".urlap"));
        this.dataService = new DataService();
        $(window).on("valid", (event) => {
            const DATAS = event.detail;
            
            this.dataService.postAxiosData("api/post", DATAS);
        });
        $(window).on("delete", (event) => {
            const DATAS = event.detail;
            
            
            this.dataService.deleteAxiosData("api/delete", DATAS);
        });
        $(window).on("update", (event) => {
            const DATAS = {writer_id: 6,nev:"Pista",szul:1583};
            
            this.dataService.putAxiosData("api/update", DATAS);
        });
    }

} export default UrlapController