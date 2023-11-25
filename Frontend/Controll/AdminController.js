import UrlapModel from "../Model/UrlapModel.js"
import UrlapView from "../View/UrlapView.js"
import DataService from "../Model/DataService.js";
import DataView from "../View/DataView.js";
import HibaView from "../View/HibaView.js";

class AdminController{
    #urlapModel
    #urlapView
    constructor(){
        this.esemenyKezeles();
    }

    init(){
        this.#urlapModel = new UrlapModel();
        this.#urlapView = new UrlapView(this.#urlapModel.leiro,$(".urlap"), "");
        this.dataService = new DataService();
        this.dataService.getData("api/writers", this.megjelenit, this.hibaMegjelenit);
    }

    megjelenit(lista){
        $(".lista").html("");
        new DataView(lista, $(".lista"));
    }

    hibaMegjelenit(error){
        new HibaView(error, $(".lista"));
    }

    esemenyKezeles(){
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
            new UrlapView(this.#urlapModel.leiro,$(".urlap"), "edit");
            this.#urlapView.editElem.css("display", "inline");
            this.#urlapView.submitElem.css("display", "none");
            $(".urlap").find("form input[type='text']").val(event.detail.nev);
            $(".urlap").find("form input[type='number']").val(event.detail.szul);
            let obj = event.detail;
            $(window).on("update", (event) => {
                const DATAS = event.detail;
                this.dataService.putAxiosData("api/update", DATAS, obj.writer_id);
            });
        });
    }

} export default AdminController