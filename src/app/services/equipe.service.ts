import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private apiUrl = environment.host;

  constructor(private http: HttpClient) { }

  public cadastrar(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl + 'api/Equipe/cadastrar', JSON.stringify(equipe));
  }

  public atualizar(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl + 'api/Equipe/atualizar', JSON.stringify(equipe));
  }

  public excluir(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl + 'api/Equipe/excluir', JSON.stringify(equipe));
  }

  public obterTodas(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiUrl + 'api/Equipe/obterTodas');
  }

}
