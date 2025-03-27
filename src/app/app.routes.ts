import { Routes } from '@angular/router';
import { entityGuard } from './guards/entity.guard';

export const routes: Routes = [
    {
        path: 'entity/:entity',
        loadComponent: () => import('./components/entity/entity.component').then(m => m.EntityComponent),
        canActivate: [entityGuard]
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
