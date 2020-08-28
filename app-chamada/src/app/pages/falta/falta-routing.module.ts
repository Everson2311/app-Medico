import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaltaPage } from './falta.page';

const routes: Routes = [
  {
    path: '',
    component: FaltaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaltaPageRoutingModule {}
