import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<app-server></app-server>',
  //styleUrls: ['./servers.component.css']
  styles: [`
  h3{
    color: red;
  }`]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
