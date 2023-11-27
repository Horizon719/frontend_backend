import AdminController from "./Controll/AdminController.js";
import KivalasztottController from "./Controll/KivalasztottController.js";
import PublikusController from "./Controll/PublikusController.js";

const ADMIN = new AdminController();
const PUBLIKUS = new PublikusController();
const KIVALASZTOTT = new KivalasztottController();

$(function () {
     admin();
     $("#admin").on("click", () => {
          admin();
     });
     $("#publikus").on("click", () => {
          publikus();
     });
     $("#kivalasztott").on("click", () => {
          kivalasztott();
     });
})


function admin(){
     let txt = `<div class="urlap"></div>
          <div class="edit"></div>
          <div class="lista"></div>
          <div class="loader"></div>`;
     $("#alticle").html(txt);
     ADMIN.init();
};

function publikus(){
     let txt = `<div class="kartya"></div>
                <div class="loader"></div>`;
     $("#alticle").html(txt);
     PUBLIKUS.init();
};

function kivalasztott(){
     let txt = `<div class="kivalasztott"></div>
                <div class="loader"></div>`;
     $("#alticle").html(txt);
     KIVALASZTOTT.init();
};
