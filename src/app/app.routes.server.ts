import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '404-page-not-found',
    renderMode: RenderMode.Client,
    status: 404
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
