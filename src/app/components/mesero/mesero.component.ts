import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MenuService } from '../../sevicios/menu.service';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {

  private menu:any[]=[];
  public menuToShow:any[]=[];

  public filterBy:string='Breakfast';

//propiedad privada solo se ve en este componente
  constructor( private _menuService:MenuService){

  }
//llamo al menu desde service
  ngOnInit() {
    this.menu = this._menuService.getMenu();
    this.updateMenuToShow();
  }

  updateMenuToShow(): void {
    this.menuToShow = this.menu.filter(item => item.Type == this.filterBy);
  }
  
}
