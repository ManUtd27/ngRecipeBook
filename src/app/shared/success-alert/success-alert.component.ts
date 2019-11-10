import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
@Input() isDisplayed;
@Output() closeAlert = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  close(state: boolean) {
   this.closeAlert.emit(state);
  }
}
