import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetCustomerDetailsPage } from './get-customer-details.page';

const routes: Routes = [
  {
    path: '',
    component: GetCustomerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetCustomerDetailsPageRoutingModule {}
