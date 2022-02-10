class stock{
    constructor() {
        this.stock = [];
        const URL = `../../json/stock.json`
        $.getJSON(URL, (res, succ)=>{
            if (succ === "success"){
                let datos = res;
                for (const dato of datos){
                    this.stock.push(dato) 
                }
            }
        })
    }

    agregarTarjeta(padre, stock){
        
    }
}