import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() appName = new EventEmitter<string>();

  constructor(){
    this.appName.emit("TIAA Dashboard");
  }
}
