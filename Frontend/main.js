import AdminController from "./Controll/AdminController.js";
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
     new AdminController();
};

function publikus(){
     let txt = ``;
     $("#alticle").html(txt);
};

function kivalasztott(){
     let txt = ``;
     $("#alticle").html(txt);
};
