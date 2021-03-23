import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  allowNewUser = false;
  userCreationStatus = "No User Created";
  userName = "Test User";

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    },2000);
   }

  ngOnInit(): void {

  }

  onCreateUser(){
    this.userCreationStatus = `User created. Name: ${this.userName}`;
  }

 onUpdateServerName(event: any){
  this.userName = (<HTMLInputElement>event.target).value;
  // console.log(this.userName); 
}

}
