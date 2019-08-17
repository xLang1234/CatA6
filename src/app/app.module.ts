import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { User2Component } from './user2/user2.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    UserComponent,
    AdminComponent,
    User2Component
  ],
  imports: [
    BrowserModule,
	routing,
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
