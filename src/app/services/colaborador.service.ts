import { Injectable, Inject, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Colaborador } from '../models/colaborador.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private apiUrl = environment.host;

  constructor(private http: HttpClient) {
  }


  public cadastrar(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.apiUrl + 'api/Colaborador/cadastrar', JSON.stringify(colaborador));
  }

  public atualizar(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.apiUrl + 'api/Colaborador/atualizar', JSON.stringify(colaborador));
  }

  public excluir(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.apiUrl + 'api/Colaborador/excluir', JSON.stringify(colaborador));
  }

  public obterColaborador(id: number): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.apiUrl + 'api/Colaborador/obterColaborador', JSON.stringify(id));
  }

  public obterTodos(): Observable<Colaborador[]> {
    return this.http.get<any>(this.apiUrl + 'api/Colaborador/obterTodos')
    .pipe(
      tap(console.log)
    );
  }


}
