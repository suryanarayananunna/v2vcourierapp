import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetcourierdetailsPage } from './setcourierdetails.page';

const routes: Routes = [
  {
    path: '',
    component: SetcourierdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetcourierdetailsPageRoutingModule {}
