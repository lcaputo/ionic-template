import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { Location } from '@angular/common';
import { AppSettings } from 'src/app/settings/settings';
import { Settings } from 'src/app/settings/settings.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public datos: FormGroup;
  public settings: Settings;

  constructor(
    public appService: AppService,
    public auth: AuthService,
    public location: Location,
    public formBuilder: FormBuilder,
    public appSettings: AppSettings,
    ) 
  { 
    this.settings = this.appSettings.settings;
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
        this.settings.authenticated = true;
        this.location.back();
      }
    );
  }

}
