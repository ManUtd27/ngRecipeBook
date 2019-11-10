import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
@Input() isDisplayed;
@Output() closeAlert = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  close(state: boolean) {
    this.closeAlert.emit(state);
  }
}
