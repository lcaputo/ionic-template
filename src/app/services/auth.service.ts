import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public _usuario: Usuario;
  public _token: string;
  public url = 'http://localhost:8000/api/'
  private httpOptions;
  private httpMultipartOption;

  constructor(
    private http: HttpClient, 
    private router: Router
    ) { }

  public get usuario(): Usuario {
    if ( this._usuario !== null ) {
      return this._usuario;
    } else if ( this._usuario === null && sessionStorage.getItem('usuario') !== null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  public get token(): string {
    if ( this._token != null ) {
      return this._token;
    } else if ( this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
  }

  isTokenExpired(): boolean {
    let token: string = sessionStorage.getItem('token');
    let payload = this.obtenerDatosToken(token);
    let now = new Date().getTime() / 1000;
    if (payload.exp < now) {
      return true;
    }
    return false;
  }
  

  setToken( access_token: string): void {
    this._token = access_token;
    sessionStorage.setItem('token',access_token);
  }


  obtenerDatosToken( access_token: string): any {
    console.log(access_token);
    if (access_token != null && access_token != undefined && access_token != '') {
      return access_token;
    }
    else{
      sessionStorage.clear();
      //this.router.navigate(['/login']);
    }
  }

  Authenticate(): boolean {
    let token = sessionStorage.getItem('token');
    let payload = this.obtenerDatosToken(token);
    if (payload != null && payload.length > 0 //payload.user_name && payload.user_name.length > 0
      ) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  isAuthenticated(): boolean {
    let token = sessionStorage.getItem('token');
    let payload = this.obtenerDatosToken(token);
    if (payload != null && payload.length > 0 //payload.user_name && payload.user_name.length > 0
      ) {
      return true;
    }
    //this.router.navigate(['/login']);
    return false;
  }

  hasRole(role: any): boolean {
    if (this.usuario != null && this.usuario.roles != null && this.usuario.roles.includes(role)) {
      return true;
    }
    return false;
  }

  logout(): void {
    this._token = null;
    this._usuario = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    //this.router.navigate(['/'])
    //sessionStorage.removeItem('usuario');
    //window.location.replace(this.url+'#/login');
  }

  obtenerDatosUser() {
    if ( this._usuario !== null ) {
      return this._usuario;
    } else if ( this._usuario === null && sessionStorage.getItem('usuario') !== null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  login(data: any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log(data);
    return this.http.post<any>(this.url+'token/', data, { headers: httpHeaders });
  }
}