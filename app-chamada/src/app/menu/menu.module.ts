import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class MenuMenuModule { }
