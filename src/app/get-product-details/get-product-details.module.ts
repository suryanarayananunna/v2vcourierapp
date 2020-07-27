import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetProductDetailsPageRoutingModule } from './get-product-details-routing.module';

import { GetProductDetailsPage } from './get-product-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetProductDetailsPageRoutingModule
  ],
  declarations: [GetProductDetailsPage]
})
export class GetProductDetailsPageModule {}
