import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class EmpresaService {

    constructor(private http: HttpClient) { }

    todas() {
      return this.http.get(`${environment.apiUrl}/empresa`);
    }
  }
