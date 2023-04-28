class Elem{
    #allapot;
    constructor(szuloElem, id){
        this.id=id;
        this.#allapot=true;
        szuloElem.append("<div class='elem' <p> </p> </div>");
        this.divElem = $("article div:last-child");

        this.pElem = this.divElem.children("p");

        this.divElem.on("click", ()=> {
            if(this.#allapot){
            this.EsemenyTrigger()
            } 
            this.#allapot=false;
            //this.setElem("x");
            
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