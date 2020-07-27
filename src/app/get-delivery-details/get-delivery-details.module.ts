import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetDeliveryDetailsPageRoutingModule } from './get-delivery-details-routing.module';

import { GetDeliveryDetailsPage } from './get-delivery-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetDeliveryDetailsPageRoutingModule
  ],
  declarations: [GetDeliveryDetailsPage]
})
export class GetDeliveryDetailsPageModule {}
