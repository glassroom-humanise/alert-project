import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ProfileComponent } from './components/profile/profile.component';

import { loggedInGuard } from './guards/logged-in/logged-in.guard';
import { notLoggedInGuard } from './guards/not-logged-in/not-logged-in.guard';


export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [loggedInGuard] },
    { path: 'alerts', component: AlertsComponent, canActivate: [loggedInGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [loggedInGuard] },
    { path: '', component: SignInComponent, canActivate: [notLoggedInGuard] },
];
