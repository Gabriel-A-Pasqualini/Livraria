
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Bag, LogType } from '../models/Bag';
import { NotificationService } from '../services/notification.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private svc: AuthService,
        private notifications: NotificationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.svc.currentUserValue;
        if (currentUser && currentUser.Token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.Token}`
                }
            });
        }

        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              if (event.body.hasOwnProperty('Messages')) {
                const bag = (event.body as Bag<any>);
                this.notifications.notifyAll(bag.Messages);
              }
            };
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              switch (err.status) {
                case 401:
                  //this.authSvc.logout();
                  break;
                case 500:
                  this.notifications.notify({ Message: err.error.message, Type: LogType.Error });
                  break;
                case 403:
                  this.notifications.notify({ Message: 'Acesso negado.', Type: LogType.Error });
                break;
              }
            }
        }));
    };
}
