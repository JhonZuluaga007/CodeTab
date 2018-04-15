import {Component, OnInit} from '@angular/core';

@Component({
	selector:'home',
	templateUrl:'./component.home.html'
	//styleUrls: ['./component.home.css']


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
