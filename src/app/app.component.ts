import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public settings = {
    length: 6,
    numbersOnly: true,
    timer: 120
  }
  
  constructor(){}

  public onInputChange(e) {
    console.log(e);
    // e will emit values entered as otp and,
    // if e == -1, timer has stopped
    // work accordingly
  }
}
