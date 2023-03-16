import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  constructor(private http: HttpClient) { }

  listarUsuarios() {
    return this.http.get(`${environment.apiUrl}/usuario`);
  }

  adicionarUsuario(usuario) {
    return this.http.post(`${environment.apiUrl}/usuario`, usuario);
  }

  atualizarUsuario(usuario) {
    return this.http.put(`${environment.apiUrl}/usuario`, usuario);
  }

  excluirUsuario(login) {
    return this.http.delete(`${environment.apiUrl}/usuario/${login}`);
  }

  alterarSenha(novaSenha, login) {
    return this.http.post(`${environment.apiUrl}/usuario/${login}`,
      novaSenha,
      { headers : new HttpHeaders({'content-type': 'application/json'}) }
    );
  }
}
