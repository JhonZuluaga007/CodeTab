import {Component, OnInit} from '@angular/core';

@Component({
	selector:'contact',
	templateUrl:'./component.contact.html'

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