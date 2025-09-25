import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const seguridadGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('usuario') !== null;
};

export const logininiciosesion: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('usuario') !== null) {
    router.navigate(['/dashboard']);
    return false;
  }
  return true;
};


