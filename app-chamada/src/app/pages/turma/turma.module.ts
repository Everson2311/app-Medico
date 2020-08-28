import { MenuMenuModule } from 'src/app/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurmaPageRoutingModule } from './turma-routing.module';

import { TurmaPage } from './turma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurmaPageRoutingModule,
    MenuMenuModule
  ],
  declarations: [TurmaPage]
})
export class TurmaPageModule {}
