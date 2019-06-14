import { Component, OnInit, } from '@angular/core';
import { MenuService } from '../../sevicios/menu.service';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {

  public menu:any[]=[];
  public menuToShow:any[]=[];//se crea nuevo arreglo para mostrar tipo

  public filterBy:string='Lunch';
  

//propiedad privada solo se ve en este componente
  constructor( public _menuService:MenuService){

  }
//llamo al menu desde service
  ngOnInit() {
    this.menu = this._menuService.getMenu();
    this.updateMenuToShow();
  }

  updateMenuToShow(): void {
    this.menuToShow = this.menu.filter(item => item.Type == this.filterBy);
  }
  
  handleBreakfastClick(){
    this.filterBy = "Breakfast";
    this.updateMenuToShow()
  }
  handleLunchClick(){
    this.filterBy = "Lunch";
    this.updateMenuToShow()
  }

  
}
    

  

    
