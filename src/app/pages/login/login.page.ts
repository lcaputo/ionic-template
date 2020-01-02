import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public datos: FormGroup;

  constructor(
    public appService: AppService,
    public auth: AuthService,
    public formBuilder: FormBuilder,
    ) 
  { 
    this.datos = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login( { username: this.datos.value.username, password: this.datos.value.password } ).subscribe(
      (token: any) => {
        token = token.access
        this.auth.setToken(token);
        return this.auth.obtenerDatosToken(token);
      }
    );
  }

}
