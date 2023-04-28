import Elem from "./elem.js";
class Jatekter {
    #lepes;
    constructor(){
    this.#lepes = 0;
    const szuloElem = $("article")
    for (let index = 0; index < 9; index++){
        const elem = new Elem (szuloElem, index)
    }
    // ha  a lepes valtozol paros akkor x az adott divbe ha viszont a lepes valtozo paratlan akkor 0
    $(window).on("elemkivalasztas", (event)=>{
        console.log(even.detail)
        if(lepes%2==0){
            event.detail.setElem("x");
        } else {
            event.detail.setElem("0");
        }
        lepes++;
    })
    }
}
export default Jatekter;