import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes
import { AppComponent } from './app.component';
import {EnterpriseComponent} from './component/enterprise/component.enterprise';
import {ContactComponent} from './component/contact/component.contact';
import {HomeComponent} from './component/home/component.home';

//constante
const appRoutes:Routes=[
	{path:'',component:HomeComponent},
	{path:'enterprise',component:EnterpriseComponent},
	{path:'contact',component:ContactComponent},
	{path:'home',component:HomeComponent}

];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);