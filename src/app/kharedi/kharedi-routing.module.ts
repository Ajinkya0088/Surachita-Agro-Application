import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KharediPage } from './kharedi.page';

const routes: Routes = [
  {
    path: '',
    component: KharediPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KharediPageRoutingModule {}
