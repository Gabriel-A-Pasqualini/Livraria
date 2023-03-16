import { Injectable, } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LogType, LogNotification } from '../models/Bag';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private acceptedLogTypes: LogType[] = [LogType.Error];
    private toErrorType = {
        69: 'error'
    };
  constructor(private notification: NzNotificationService) { }


  notify(notification: LogNotification) {
    if (!this.acceptedLogTypes.includes(notification.Type)) {
      return;
    }
    this.notification.create(
        this.toErrorType[notification.Type],
        notification.Message, ''
      );
  }

  notifyAll(notifications: LogNotification[]) {
    const svc = this;
    const acceptedNotifications = notifications
      .filter(notification => this.acceptedLogTypes.includes(notification.Type));
    for (let i = 0; i < acceptedNotifications.length; i++) {
      setTimeout(() => {
        svc.notify(acceptedNotifications[i]);
      }, i * 500);
    }
  }
}
