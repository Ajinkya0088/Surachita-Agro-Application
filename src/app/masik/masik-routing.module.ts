import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasikPage } from './masik.page';

const routes: Routes = [
  {
    path: '',
    component: MasikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasikPageRoutingModule {}
