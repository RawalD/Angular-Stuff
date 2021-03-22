import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created";
  serverName = "Testing";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = `Server created. Name: ${this.serverName}`;
  }

 onUpdateServerName(event: any){
  this.serverName = (<HTMLInputElement>event.target).value;
  console.log(this.serverName); 
}
}
