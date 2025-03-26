import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'repos',
        loadChildren: () => import('./features/repositories/repositories.module').then(m => m.RepositoriesModule),
      },
      {
        path: 'commits',
        loadChildren: () => import('./features/commits/commits.module').then(m => m.CommitsModule),
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'repos',
    pathMatch: 'full'
  }

];