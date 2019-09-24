import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings = {
    length: 6,
    numbersOnly: true
  }
  constructor(){}
  public onInputChange(e) {
    console.log(e);
  }
}
