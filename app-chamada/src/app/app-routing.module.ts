import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const newLocal = './pages/relatorio/relatorio.module';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  {
    path: 'turma',
    children: [
      {
        path: '',
        loadChildren: './pages/turma/turma.module#TurmaPageModule'
      },
      { path: 'faltas', loadChildren: './pages/falta/falta.module#FaltaPageModule' },
    ]
  },
  {
   path: 'relatorio',
   loadChildren: () => import(newLocal).then( m => m.RelatorioPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
