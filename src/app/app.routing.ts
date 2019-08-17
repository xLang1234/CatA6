import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {AdoptionComponent} from './adoption/adoption.component';
import {AdoptionformComponent} from './adoptionform/adoptionform.component';
import {AdoptionformreviewComponent} from './adoptionformreview/adoptionformreview.component';
import {ContactComponent} from './contact/contact.component';
import {CustomerComponent} from './customer/customer.component';
import {EditprofileComponent} from './editprofile/editprofile.component';
import {GalleryComponent} from './gallery/gallery.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';
import {ModifycatComponent} from './modifycat/modifycat.component';
import {NewcatComponent} from './newcat/newcat.component';
import {RegistrationComponent} from './registration/registration.component';
import {RulesComponent} from './rules/rules.component';


import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
	{ path: 'admin', component:AdminComponent },
	{ path: 'adoption', component: AdoptionComponent},
	{ path: 'adoptionform', component: AdoptionformComponent},
	{ path: 'adoptionformreview', component:AdoptionformreviewComponent },
	{ path: 'contact', component: ContactComponent},
	{ path: 'customer', component: CustomerComponent},
	{ path: 'editprofile', component: EditprofileComponent},
	{ path: 'gallery', component: GalleryComponent},
	{ path: 'index', component: IndexComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'modifycat', component: ModifycatComponent},
	{ path: 'newcat', component: NewcatComponent},
	{ path: 'registration', component: RegistrationComponent},
	{ path: 'rules', component: RulesComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

