import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiRestPageRoutingModule } from './api-rest-routing.module';

import { ApiRestPage } from './api-rest.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ApiRestPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ApiRestPage]
})
export class ApiRestPageModule {}
