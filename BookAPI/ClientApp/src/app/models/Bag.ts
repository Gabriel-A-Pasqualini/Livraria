
  
  export class Bag<T> {
    Response: T;
    Messages: LogNotification[];
    Success: boolean;
    Error: boolean;
  }
  
  export enum LogType {
    Error = 69
  }
  
  export class LogNotification {
    Type: LogType;
    Message: string;
  }