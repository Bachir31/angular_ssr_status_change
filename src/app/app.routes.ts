import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app.component').then(m => m.AppComponent)
    },
    {
        path: 'entity/:entity',
        loadComponent: () => import('./components/entity/entity.component').then(m => m.EntityComponent)
    },
    {
        path: '404-page-not-found',
        loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
    },
    {
        path: '**',
        redirectTo: '/404-page-not-found'
    }
];
