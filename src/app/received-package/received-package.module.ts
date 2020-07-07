import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivedPackagePageRoutingModule } from './received-package-routing.module';

import { ReceivedPackagePage } from './received-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivedPackagePageRoutingModule
  ],
  declarations: [ReceivedPackagePage]
})
export class ReceivedPackagePageModule {}
