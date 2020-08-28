import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaltaPageRoutingModule } from './falta-routing.module';

import { FaltaPage } from './falta.page';
import { MenuMenuModule } from 'src/app/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaltaPageRoutingModule,
    MenuMenuModule
  ],
  declarations: [FaltaPage]
})
export class FaltaPageModule {}
