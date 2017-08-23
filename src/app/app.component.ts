import { Component , OnInit} from '@angular/core';
import { TestService } from './test-service.service';
import { Result } from './result';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result : Result;
  constructor(private testService : TestService){

  }
  ngOnInit(){
  	console.log("Inside ngOnit");
  	this.callService();
  }

  callService(){
  	this.testService.test()
  	.subscribe(
  		response =>{console.log(response)},error =>{
  			console.log(error);
  		}
  		);
  }
}
