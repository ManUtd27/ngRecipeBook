import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService, AuthResponseData} from './auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  authenticateForm: FormGroup;
  isLoginMode = true;
  isLoading = false;
  error: string = null;

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
    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }
    authObs.subscribe(
      responseData => console.log(responseData),
      error => {
        console.log(error);
        this.error = error;
        this.isLoading = false;
      },
      () => this.isLoading = false
    );
    this.authenticateForm.reset();
  }
}
