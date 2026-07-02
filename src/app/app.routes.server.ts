import { RenderMode, type ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'contato', renderMode: RenderMode.Prerender },
  { path: 'projetos', renderMode: RenderMode.Server },
  { path: '**', renderMode: RenderMode.Server },
];
