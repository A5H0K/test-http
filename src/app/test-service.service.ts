import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Result } from './result'
import 'rxjs'
import 'rxjs/Rx'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class TestService {
	result : Result;
	status : string;
  constructor(private http : Http) {
  	console.log("Call inside the Constructor");
   }


    test() {
   	console.log("Service has been called from component");

   	
   	return this.http.get('http://localhost:3001/default').map((response : Response) =>{this.status =  response.json();
   		console.log(this.status);
   		return this.status;});
   }

}
