import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { IndexComponent } from './index/index.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { AdoptionformComponent } from './adoptionform/adoptionform.component';
import { AdoptionformreviewComponent } from './adoptionformreview/adoptionformreview.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModifycatComponent } from './modifycat/modifycat.component';
import { NewcatComponent } from './newcat/newcat.component';
import { RegistrationComponent } from './registration/registration.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    IndexComponent,
    AdoptionComponent,
    AdoptionformComponent,
    AdoptionformreviewComponent,
    ContactComponent,
    CustomerComponent,
    EditprofileComponent,
    GalleryComponent,
    ModifycatComponent,
    NewcatComponent,
    RegistrationComponent,
    RulesComponent
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
