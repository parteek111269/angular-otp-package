# Angular Otp input Library

Angular otp input field component for web applications. Easy to integrate and use.

## Demo
<a href="https://stackblitz.com/github/parteek111269/angular-otp-package" rel="nofollow" target="_blank">Live Demo</a>

## Installation

```bash
npm i angular-otp-box
``` 

## Usage

Add `AngularOtpLibModule` in `app.module.ts`
```python
import { AngularOtpLibModule } from 'angular-otp-box';
import { NgModule } from  '@angular/core';
import { AppComponent } from  './app.component';

    @NgModule({
    declarations: [AppComponent],
    imports: [NgOtpInputModule],
    bootstrap: [AppComponent]
    })
```

In `component` add following:
```bash
<otp [setting]="settings" (onValueChange)="onInputChange($event)"></otp>
```

## API

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>setting</td>
        <td>object</td>
        <td>{ length:4, timer: 0 }</td>
        <th>true</th>
        <td>configurations to configure the component</td>
    </tr>
    <tr>
        <td>onValueChange</td>
        <td>function</td>
        <td>--</td>
        <th>true</th>
        <td>Emitter that will emit otp, -1 when the timer reaches 0 count and -2 when resend button is clicked</td>
    </tr>
</table>

**setting options**

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>length</td>
        <td>number</td>
        <td>4</td>
        <th>true</th>
        <td>Number of OTP inputs</td>
    </tr>
    <tr>
        <td>numbersOnly</td>
        <td>boolean</td>
        <td>--</td>
        <th>false</th>
        <td>set true to allow only numbers as input</td>
    </tr>
    <tr>
        <td>inputClass</td>
        <td>string</td>
        <td>--</td>
        <th>false</th>
        <td>Class applied to each input.</td>
    </tr>
    <tr>
        <td>wrapperClass</td>
        <td>string</td>
        <td>--</td>
        <th>false</th>
        <td>Class applied to wrapper element.</td>
    </tr>
    <tr>
        <td>inputStyles</td>
        <td>object</td>
        <td>--</td>
        <th>false</th>
        <td>Style applied to each input.Check [ngStyles](https://angular.io/api/common/NgStyle) for more info.</td>
    </tr>
    <tr>
        <td>wrapperStyles</td>
        <td>object</td>
        <td>--</td>
        <th>false</th>
        <td>Style applied to wrapper element.Check [ngStyles](https://angular.io/api/common/NgStyle) for more info.</td>
    </tr>
    <tr>
        <td>allowKeyCodes</td>
        <td>string[]</td>
        <td>--</td>
        <th>false</th>
        <td>By default numbers alphabets and _ - are allowed.Y ou can define other key codes if needed.</td>
    </tr>
    <tr>
        <td>timer</td>
        <td>number</td>
        <td>0</td>
        <th>false</th>
        <td>Countdown for otp</td>
    </tr>
    <tr>
        <td>btnClass</td>
        <td>string</td>
        <td>--</td>
        <th>false</th>
        <td>Class applied to resend otp button</td>
    </tr>
</table>

## License
[MIT](https://choosealicense.com/licenses/mit/)
