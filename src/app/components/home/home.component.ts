import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {

//personName:any=[];
//propiedad privada solo se ve en este componente
////constructor( private _personName:ClienteService)
  constructor( ){

  }
  ngOnInit() {

    
    //this.personName = this.personName.getPersonName();
      //console.log ( this.personName);
  }
}
