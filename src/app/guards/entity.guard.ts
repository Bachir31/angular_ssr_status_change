import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const entityGuard: CanActivateFn = (route, state) => {
  
  const knownEntities: string[] = ['123456789-entity', '987654321-entity']

  const router = inject(Router);
  const entity : string | null = route.paramMap.get('entity');
  
  if (entity && knownEntities.includes(entity)) {
    return true
  } else {
    return router.navigate(['/404-page-not-found'])
  }
};
