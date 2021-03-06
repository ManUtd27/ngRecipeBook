import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../data-storage.service';
import {AuthService} from '../../dashboard/auth.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  isAuthenticated = false;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onLogOut() {
    this.authService.logout();
  }
}
