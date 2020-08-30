import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasikPageRoutingModule } from './masik-routing.module';

import { MasikPage } from './masik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasikPageRoutingModule
  ],
  declarations: [MasikPage]
})
export class MasikPageModule {}
