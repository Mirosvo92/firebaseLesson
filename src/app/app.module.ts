import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {firebaseConfig} from '../environments/config';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './routes';
import {AuthService} from './services/auth.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { MessageComponent } from './dashboard/message/message.component';
import {Routes} from "@angular/router";


const appRoutes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'dashboard', component: DashboardComponent},
];




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
