import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//rutas
import { APP_ROUTING} from './app.routes';


//servicios
import { MenuService } from './sevicios/menu.service'

//component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MeseroComponent } from './components/mesero/mesero.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MeseroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
