import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './auth.guard';

import { User2Component } from './user2/user2.component';


const appRoutes: Routes = [
	{ path: 'register', component:RegisterComponent},
	{ path: 'login', component:LoginComponent},
	{ path: 'logout', component:LogoutComponent},
	{ path: 'user', component:UserComponent, canActivate: [AuthGuard], data: {
		permission: {only: ["user", "admin"]}}},
	{ path: 'admin', component:AdminComponent, canActivate: [AuthGuard], data: {
		permission: {only: ["admin"]}}},
	{ path: 'user2', component:User2Component, canActivate: [AuthGuard], data: {
		permission: {only: ["user"]}}},
	{ path: '', component:LoginComponent, pathMatch:'full'}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

