import { Injectable } from '@angular/core'


@Injectable()//decorador
    export class MenuService{

    private menu:any[] = 
    [
    { 
    Type:"Breakfast",
    Producto: "Cafe Americano",
    Valor: "$500",
    },
    
    {
    Type:"Breakfast",
    Producto: "Cafe con leche",
    Valor: "$700",
    },
    
    {
    Type:"Breakfast",
    Producto: "Sandwich de jamón y queso",
    Valor: "$1000",
    },
    
    {
    Type:"Breakfast",
    Producto: "Jugo natural",
    Valor: "$700",
    },
    
    {
    Type:"Lunch",
    Producto: "Hamburguesa Simple",
    Valor: "$1500",
    },
    
    {
    Type:"Lunch",
    Producto: "Hamburguesa Doble",
    Valor: "$2500/td>",
    },
    
    {
    Type:"Lunch",
    Producto: "Papas fritas",
    Valor: "$500",
    },
    
    {
    Type:"Lunch",
    Producto: "Onion Rings",
    Valor: "$500",
    },
    
    {
    Type:"Lunch",
    Producto: "Gaseosa 500ml",
    Valor: "$700",
    },
    
    {
    Type:"Lunch",
    Producto: "Agua 500ml",
    Valor: "$500",
    },
    {
    Type:"Lunch",
    Producto: "Gaseosa 750ml",
    Valor: "$800",
    },
    
    {
    Type:"Lunch",
    Producto: "Agua 750ml",
    Valor: "$1000",
    }
    ];
    
    constructor(){
        console.log("servicio listo");
    }


getMenu(){
return this.menu; 
}
    }
    export class ClienteService{

        private personName:any;
        //se crea clase con id y name
        name:string;

    getPersonName(){
        return this.personName;
    }

};