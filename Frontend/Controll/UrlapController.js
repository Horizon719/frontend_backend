import UrlapModel from "../Model/UrlapModel.js"
import UrlapView from "../View/UrlapView.js"
import DataService from "../Model/DataService.js";

class UrlapController{
    constructor(){
        const URLAPMODEL = new UrlapModel();
        const URLAPVIEW = new UrlapView(URLAPMODEL.leiro,$(".urlap"), "");
        this.dataService = new DataService();
        $(window).on("valid", (event) => {
            const DATAS = event.detail;
            this.dataService.postAxiosData("api/post", DATAS);
        });
        $(window).on("delete", (event) => {
            const DATAS = event.detail.writer_id;
            this.dataService.deleteAxiosData("api/delete", DATAS);
        });
        
        $(window).on("modosit", (event) => {
            $(".urlap").html("");
            new UrlapView(URLAPMODEL.leiro,$(".urlap"), "edit");
            URLAPVIEW.editElem.css("display", "inline");
            URLAPVIEW.submitElem.css("display", "none");
            let obj = event.detail;
            $(window).on("update", (event) => {
                const DATAS = event.detail;
                this.dataService.putAxiosData("api/update", DATAS, obj.writer_id);
            });
        });
    }

} export default UrlapController