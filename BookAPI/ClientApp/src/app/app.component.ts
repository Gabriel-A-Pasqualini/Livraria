import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { Usuario } from './auth/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isCollapsed = false;
  loggedUser: Observable<Usuario>;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.loggedUser = this.authService.currentUser;
  }
  sair(){
    this.authService.logout();
  }
  title = 'MES';
}
