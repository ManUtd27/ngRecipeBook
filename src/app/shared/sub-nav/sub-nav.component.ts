import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../dashboard/auth.service';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.css']
})
export class SubNavComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;
  isAuthenticated = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
