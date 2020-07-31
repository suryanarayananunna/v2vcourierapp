import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetcourierdetailsPageRoutingModule } from './setcourierdetails-routing.module';

import { SetcourierdetailsPage } from './setcourierdetails.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SetcourierdetailsPageRoutingModule
  ],
  declarations: [SetcourierdetailsPage]
})
export class SetcourierdetailsPageModule {}
