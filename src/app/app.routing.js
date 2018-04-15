import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes
import { AppComponent } from './app.component';
import {EnterpriseComponent} from './component/enterprise/enterprise.component';
import {ContactComponent} from './component/contact/contact.component';
import {HomeComponent} from './component/home/home.component';

//constante
const appRoutes:Routes=[
	{path:'',component:HomeComponent},
	{path:'enterprise',component:EnterpriseComponent},
	{path:'contact',component:ContactComponent},
	{path:'home',component:HomeComponent}

];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);