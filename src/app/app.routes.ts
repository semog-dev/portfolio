import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'projetos',
    loadComponent: () => import('./pages/projetos/projetos').then((m) => m.Projetos),
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contato/contato').then((m) => m.Contato),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
