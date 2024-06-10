import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'game/:id',
    loadChildren: () =>
      import('@bg-hoard/feature-game-detail').then(
        (id) => id.featureGameDetailRoutes
      ),
  },
];
