import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetProductDetailsPage } from './get-product-details.page';

const routes: Routes = [
  {
    path: '',
    component: GetProductDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetProductDetailsPageRoutingModule {}
