import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrgeneratePage } from './qrgenerate.page';

const routes: Routes = [
  {
    path: '',
    component: QrgeneratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrgeneratePageRoutingModule {}
