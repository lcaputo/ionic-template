import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.page.html',
  styleUrls: ['./api-rest.page.scss'],
})
export class ApiRestPage implements OnInit {

  public items: any[] = []

  constructor(
    public appService: AppService,
    public auth: AuthService,
    public router: Router,
    public menu: MenuController,
  ) { }

  ngOnInit() {
    this.appService.get('productos').subscribe(
      (data: any) => {
        console.log(data);
        this.items = data;
      }
    )
  }

}
