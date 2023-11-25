import AdminController from "../Controll/AdminController.js";

class Loader {
    loaderElement;
    #loaderCode;
    #szuloElem
    constructor(szuloElem) {
        this.#loaderCode = `<div class="scene">
                                <div class="cube-wrapper">
                                    <div class="cube">
                                        <div class="cube-faces">
                                            <div class="cube-face shadow"></div>
                                            <div class="cube-face bottom"></div>
                                            <div class="cube-face top"></div>
                                            <div class="cube-face left"></div>
                                            <div class="cube-face right"></div>
                                            <div class="cube-face back"></div>
                                            <div class="cube-face front"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;            
        szuloElem.html(this.#loaderCode);
        this.loaderElement = szuloElem.find(".scene");
        this.#szuloElem = szuloElem;
        $('.lista').css('display','none');
    }
    
    remove() {
        this.#szuloElem.html("");
        $('.lista').css('display','inline');
    }

    keresUtan(){
        location.reload();
    }
}

export default Loader;