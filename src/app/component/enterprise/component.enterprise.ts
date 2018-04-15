import {Component, OnInit} from '@angular/core';

@Component({
	selector:'enterprise',
	templateUrl:'./component.enterprise.html'

})

export class EnterpriseComponent implements OnInit{
	public title:string;
	

	constructor(){
		this.title='Bienvenido a NGSocial'

	}

	ngOnInit(){
		console.log('component.enterprise cargado!!');
	}
}
