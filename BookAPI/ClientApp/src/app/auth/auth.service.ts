import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Bag } from '../models/Bag';
@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public get currentUserValue(): Usuario {
      return this.currentUserSubject.value;
  }

  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    if (this.isAuthenticated()) {
        this.loggedIn.next(true);
    }
  }

  login(usuario: any) {
    return this.http.post<Bag<any>>(`${environment.apiUrl}/autenticacao`, usuario)
      .subscribe(data => {
        if (data.Response) {
          const user = data.Response;
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.loggedIn.next(true);
          this.router.navigate(['/']);
        }
      });
  }

  logout() {
    this.loggedIn.next(false);
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser?.Token;
    return !this.jwtHelper.isTokenExpired(token);
  }
}
