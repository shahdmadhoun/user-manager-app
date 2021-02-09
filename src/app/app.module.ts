import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: 'user', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-user', component: AddUserComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AboutComponent,
    HomeComponent,
    AddUserComponent
  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
