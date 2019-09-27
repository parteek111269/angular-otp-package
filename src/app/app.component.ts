import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings = {
    length: 6,
    numbersOnly: true,
    timer: 120,
    timerText: 'Resend OTP in'
  }
  constructor(){}
  public onInputChange(e) {
    console.log(e);
  }
}
