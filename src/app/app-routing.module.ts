import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./page/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'menu', loadChildren: () => import('./page/menu/menu.module').then(m => m.MenuModule) },
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
