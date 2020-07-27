import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetCourierDetailsPageRoutingModule } from './get-courier-details-routing.module';

import { GetCourierDetailsPage } from './get-courier-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetCourierDetailsPageRoutingModule
  ],
  declarations: [GetCourierDetailsPage]
})
export class GetCourierDetailsPageModule {}
