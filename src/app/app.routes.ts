import { Router, Routes } from '@angular/router';
import { ListPageComponentComponent, DetailsPageComponentComponent } from './pages';

export const appRoutes: Routes = [
    { path: '', component: ListPageComponentComponent },
    { path: 'payment/:id', component: DetailsPageComponentComponent },
    {
        path: '',
        component: ListPageComponentComponent,
    },
    { path: '**', redirectTo: '/', }
];