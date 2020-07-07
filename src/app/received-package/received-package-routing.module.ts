import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivedPackagePage } from './received-package.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivedPackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivedPackagePageRoutingModule {}
