import {Component, OnInit} from '@angular/core';

@Component({
	selector:'enterprise',
	templateUrl:'./enterprise.component.html'

})

export class EnterpriseComponent implements OnInit{
	public title:string;

	constructor(){
		this.title='Bienvenido a NGSocial'
	}

	ngOnInit(){
		console.log('enterprise.component cargado!!');
	}
}