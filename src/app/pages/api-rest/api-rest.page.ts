import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.page.html',
  styleUrls: ['./api-rest.page.scss'],
})
export class ApiRestPage implements OnInit {

  public items: any[] = []

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.get('productos').subscribe(
      (data: any) => {
        console.log(data);
        this.items.push(data);
      }
    )
  }

}
