import {Component, OnInit} from '@angular/core';

@Component({
	selector:'contact',
	templateUrl:'./component.contact.html',
  	styleUrls: ['../../app.component.scss']

})

export class ContactComponent implements OnInit{
	public title:string;

	constructor(){
		this.title='Bienvenido a NGSocial'
	}

	ngOnInit(){
		console.log('component.contact cargado!!');
	}
}