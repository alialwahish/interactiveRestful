import { Component, OnInit } from '@angular/core';
import {HttpService } from "./http.service"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks ;
  clicked=false;
  indx;
  constructor(private  _HttpService: HttpService){
    
  }
 
  ngOnInit(){
    // this.getTasksFrmSrvc();
  }

  crtTask(){
    var data={
      "title":"title 5",
      "description":"description 5 ",
      "complete":false
    }
    let obsDat= this._HttpService.createTask(data)
    obsDat.subscribe(data => {
      console.log("Got Dat Frm Server",data)
      console.log("The event: ${event}")
      this.tasks= data;
    })
  }
  


  showDisc($event,index){
    this.clicked=true;
    this.indx=this.tasks[index];
    console.log(this.indx)
  }
  getTasksFrmSrvc(event){
    let obsDat= this._HttpService.getTasks()
    obsDat.subscribe(data => {
      console.log("Got Dat Frm Server",data)
      console.log("The event: ${event}")
      this.tasks= data;
    })
  }
}
