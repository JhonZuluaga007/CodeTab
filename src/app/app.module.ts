import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing,appRoutingProviders} from './app.routing';


//Cargar componentes
import { AppComponent } from './app.component';
import {HomeComponent} from './component/home/component.home';
import {EnterpriseComponent} from './component/enterprise/component.enterprise';
import {ContactComponent} from './component/contact/component.contact';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    EnterpriseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
