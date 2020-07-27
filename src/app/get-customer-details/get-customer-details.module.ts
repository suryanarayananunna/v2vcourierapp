import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetCustomerDetailsPageRoutingModule } from './get-customer-details-routing.module';

import { GetCustomerDetailsPage } from './get-customer-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetCustomerDetailsPageRoutingModule
  ],
  declarations: [GetCustomerDetailsPage]
})
export class GetCustomerDetailsPageModule {}
