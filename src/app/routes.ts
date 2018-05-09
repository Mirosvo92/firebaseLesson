import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';


const appRoutes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'dashboard', component: DashboardComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
