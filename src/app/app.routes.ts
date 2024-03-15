import { Routes } from '@angular/router';
import { HomeComponent } from './pages/admin/home/home.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "admin/home",
        pathMatch: "full"
    }, 
    {
        path: "admin",
        children: [
            {
                path: "home",
                component: HomeComponent
            }
        ]
    }
];
