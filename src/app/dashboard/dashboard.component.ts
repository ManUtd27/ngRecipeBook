import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  authenticateForm: FormGroup;
  isLoginMode = true;

  constructor(public fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
    this.authenticateForm = this.fb.group({
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, [Validators.required, Validators.minLength(6)]]
    });
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit() {
    const {email, password } = this.authenticateForm.value;
    if (this.isLoginMode) {
    console.log('Login', this.authenticateForm.value);
    } else {
      this.authService.signUp(email, password).subscribe(
        responseData => console.log(responseData),
        error => console.log(error)
      );
    }
    this.authenticateForm.reset();
  }
}
