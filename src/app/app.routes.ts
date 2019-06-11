import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MeseroComponent }from './components/mesero/mesero.component';
import { CocinaComponent }from './components/cocina/cocina.component';

const APP_ROUTES: Routes = [//arreglo de rutas
{ path: 'home', component: HomeComponent},
{ path: 'mesero', component: MeseroComponent},
{ path: 'cocina', component: CocinaComponent},
{ path: '**', pathMatch:'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);