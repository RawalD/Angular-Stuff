import { Component, OnInit , EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
 @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit(
      {serverName: nameInput.value,
      serverContent: this.newServerContent}
        );
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit(
      {serverName: nameInput.value,
      serverContent: this.newServerContent}
        );
  }

}
