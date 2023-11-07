import UrlapModel from "../Model/UrlapModel.js"
import UrlapView from "../View/UrlapView.js"

class UrlapController{
    constructor(){
        const URLAPMODEL = new UrlapModel();
        new UrlapView($(".urlap"), URLAPMODEL.leiro);

        $(window).on("valid", (event) => {
            console.log(event.detail);
            this.dataService = new DataService();
            let datas = {};
            event.detail.forEach(element => {
                datas.push(element);
            });
            this.dataService.postData("http://localhost:8000/writers", datas);
            console.log(event.detail);
            console.log('asd');
        });
    }

} export default UrlapController