import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MeseroComponent }from './components/mesero/mesero.component';


const APP_ROUTES: Routes = [//arreglo de rutas
{ path: 'home', component: HomeComponent},
{ path: 'mesero', component: MeseroComponent},
{ path: '**', pathMatch:'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);