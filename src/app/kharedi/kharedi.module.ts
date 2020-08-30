import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KharediPageRoutingModule } from './kharedi-routing.module';

import { KharediPage } from './kharedi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KharediPageRoutingModule
  ],
  declarations: [KharediPage]
})
export class KharediPageModule {}
