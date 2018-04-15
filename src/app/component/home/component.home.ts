import {Component, OnInit} from '@angular/core';

@Component({
	selector:'home',
	templateUrl:'./component.home.html'

})

export class HomeComponent implements OnInit{
	public title:string;

	constructor(){
		this.title='Bienvenido a CodeTab'
	}

	ngOnInit(){
		console.log('component.home cargado!!');
	}
}