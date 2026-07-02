import { RenderMode, type ServerRoute } from '@angular/ssr';

// A Home agora inclui a seção de Projetos, que depende de dados ao vivo do
// GitHub — por isso a única rota real (single-page) não pode mais ser
// pré-renderizada estaticamente, precisa ser renderizada por requisição.
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },
  { path: '**', renderMode: RenderMode.Server },
];
