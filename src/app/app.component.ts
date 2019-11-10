import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isWarning = true;
isSuccess = true;

  closeSuccess(value: boolean) {
    this.isSuccess = value;
  }
  closeWarning(value: boolean) {
    this.isWarning = value;
  }
}


