import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public settings = {
    length: 4,
    numbersOnly: true,
    timer: 120,
    timerType: 0
  }
  
  constructor(){}

  public onInputChange(e) {
    console.log(e);
    if(e.length == this.settings.length) {
      // e will emit values entered as otp and,
      console.log('otp is', e);
    }else if(e == -1) {
      // if e == -1, timer has stopped
      console.log(e, 'resend button enables');
    }else if(e == -2) {
      // e == -2, button click handle
      console.log('resend otp');
    }
  }
}
