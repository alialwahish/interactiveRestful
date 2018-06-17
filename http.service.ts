import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {  
  
    
    // this.getTasks();
    // this.remTsk();
    // this.editTask();
    // this.getTask();
  }
 
  // remTsk(){
  //   console.log("removing task");
  //   let tempObs = this._http.get('/remTask/5b25a75a4e17d862f53a1659');
  //   tempObs.subscribe(data => console.log("Removed Task",data)) 
  // }



  // editTask(){
  //   console.log("grabbing one task");
  //   let tempObs = this._http.get('/editTsk/5b25986ea780a85280b75857');
  //   tempObs.subscribe(data => console.log("Got Task",data)) 
  // }

  // getTask(){
  //   console.log("grabbing one task");
  //   let tempObs = this._http.get('/task/5b25986ea780a85280b75857');
  //   tempObs.subscribe(data => console.log("Got our tasks",data))  
  // }
  
  getTasks(){
  //   console.log("Getting from MEAN")

  // let tempObs = this._http.get('/tasks');
  // tempObs.subscribe(data => console.log("Got our tasks",data))
  return this._http.get('/tasks');
  
  }

  createTask(data){
   return this._http.post('/task',data);
  }
  


  

}



