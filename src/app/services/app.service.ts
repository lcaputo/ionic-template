import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

const urlBack = 'http://localhost:8000/api/v1/'

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private httpOptions;
  private token = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    ) { }

  private getHeaders() {
    this.token = sessionStorage.getItem('token');
    if (this.token == null || this.token == undefined || this.token == '') {
      this.router.navigate(['/login']);
    } else {
      this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token }) };
    }
  }

  //GET
  get(ruta: string) {
    if (this.auth.Authenticate()) {
      let exp = this.auth.isTokenExpired();
      if (!exp) {
        this.getHeaders(); return this.http.get<any>(urlBack.concat(ruta), this.httpOptions);
      }
    } else {
      this.router.navigate(['/login']);
    }
    //this.clearSession();
  }

  //POST
  post(ruta: string, body: any) {
    if (this.auth.isAuthenticated()) {
      let exp = this.auth.isTokenExpired();
      if (!exp) {
        this.getHeaders(); return this.http.post<any>(urlBack.concat(ruta), body, this.httpOptions);
      }
    }
    //this.clearSession();
  }

  //PUT
  put(ruta: string, body: any) {
    if (this.auth.isAuthenticated()) {
      let exp = this.auth.isTokenExpired();
      if (!exp) {
        this.getHeaders(); return this.http.put<any>(urlBack.concat(ruta), body, this.httpOptions);
      }
    }
    //this.clearSession();
  }

  //DELETE
  delete(ruta: string) {
    if (this.auth.isAuthenticated()) {
      let exp = this.auth.isTokenExpired();
      if (!exp) {
        this.getHeaders(); return this.http.delete<any>(urlBack.concat(ruta), this.httpOptions);
      }
    }
    //this.clearSession();
  }




/*   getIp() {
    return this.http.get<any>(urlBack.concat('ip'));
  }

  clearSession(): void {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  public openSpinner() {
    this.spinner.show();
  }

  public closeSpinner() {
    this.spinner.hide();
  }

  public showSuccess(text: string) {
    this.toastr.success(text, 'Exito!' );
  }

  public showInfo(text: string) {
    this.toastr.info(text, 'Informacion!' );
  }

  public showWarning(text: string) {
    this.toastr.warning(text, 'Alerta!');
  }

  public showError(text: string) {
    this.toastr.error(text, 'Error!');
  }

  public showWait() {
    this.spinner.show();
  }

  public hideWait() {
    this.spinner.hide();
  }

  public logout(): void {
    Swal.fire({
      text: "Desea Cerra Session?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        sessionStorage.clear();
        this.router.navigate(['login']);
      }
    })
  } */

  public getDataUser() {
    const token = sessionStorage.getItem('token');
    let payload = JSON.parse(atob(token.split('.')[1]));
    const usuario: any = {};
    usuario.id = payload.id;
    usuario.nombre = payload.nombre;
    usuario.apellido = payload.apellido;
    usuario.email = payload.email;
    usuario.empresa = payload.empresa;
    usuario.username = payload.user_name;
    usuario.roles = payload.authorities;
    return usuario;
  }

  public setItemStore(name: string, data: any){
    sessionStorage.setItem(name, data)
  }

  public getItemStore(name: string) {
    return sessionStorage.getItem(name);
  }

/*   public go(ruta: string){
    this.router.navigate([ruta]);
  }

  public setHeaderComponent(titulo: string) {
    this.settings.headerConmponent = titulo;
  } */
}
