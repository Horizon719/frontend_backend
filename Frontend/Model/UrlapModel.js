import { ADATLEIRAS } from "./adat.js";

class UrlapModel{
    #leiro={};
    constructor(){
        this.#leiro = ADATLEIRAS;
    }

    get leiro(){
        return { ...this.#leiro};
    }

} export default UrlapModel