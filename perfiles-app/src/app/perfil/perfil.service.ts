import {Injectable} from '@angular/core';
import {Perfil} from './perfil';
import {Observable} from 'rxjs/Observable';
import {HttpModule} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable()
export class PerfilService {

  private urlEndPoint: string = 'http://localhost:8080/app/perfil';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getPerfiles(): Observable<Perfil[]> {
    return this.http.get(this.urlEndPoint + '/all').pipe(
      map(response => response as Perfil[])
    );
  }

  create(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(this.urlEndPoint, perfil, {headers: this.httpHeaders});
  }

  update(perfil: Perfil): Observable<Perfil> {
    return this.http.put<Perfil>(`${this.urlEndPoint}/${perfil.userId}`, perfil, {headers: this.httpHeaders});
  }

  getPerfil(id): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.urlEndPoint}/${id}`);
  }

  delete(id: number): Observable<Perfil> {
    return this.http.delete<Perfil>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }
}
