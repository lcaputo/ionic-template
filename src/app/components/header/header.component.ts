import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/settings/settings';
import { Settings } from 'src/app/settings/settings.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  @Input() title: string;
  @Input() backRoute: string;

  public settings: Settings;


  constructor(public appSettings: AppSettings ,public auth: AuthService, public router: Router) {
    this.settings = this.appSettings.settings;
    if(this.auth.isAuthenticated()){this.settings.authenticated = true}
  }

  login() {
    this.router.navigate(['/login'])
  }
  
  logout() {
    this.auth.logout();
    this.settings.authenticated = false;
  }

  ngOnInit() {}

}
