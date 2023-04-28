class Elem{
    constructor(szuloElem){
        szuloElem.append("<div class='elem' <p> </p> </div>");
        this.divElem = $("article div:last-child");

        this.pElem = thid.divElem.children("p");

        this.divElem.on("click", ()=> {
            //this.setElem("x");
            this.EsemenyTrigger()
        });
        }
        setElem(ertek){
            this.pElem.html(ertek);
       } 
       EsemenyTrigger(){
        const esemeny = new CustomEvent("elemkivalasztas", { detail:this});
        window.dispatchEvent(esemeny)
       }



}
export default Elem;