import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = inject(AccountService).currentUser();
  const toast = inject(ToastrService);

  if (isLoggedIn) {
    return true;
  } else {
    toast.error('You shall not pass!');
    return false;
  }
};
