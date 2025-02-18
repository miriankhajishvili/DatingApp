import { AccountService } from './../_services/account.service';
import { HttpInterceptorFn } from '@angular/common/http';

import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const acountService = inject(AccountService);
  if (acountService.currentUser()) {
    req = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + acountService.currentUser()?.token
      ),
    });
  }
  return next(req);
};
