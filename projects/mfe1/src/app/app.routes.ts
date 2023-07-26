import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
