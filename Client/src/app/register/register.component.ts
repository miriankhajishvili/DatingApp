import { AccountService } from './../_services/account.service';
import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  model: any = {};
  private AccountService = inject(AccountService);
    private toast = inject(ToastrService)
  
  cancelRegister = output<boolean>();

  register() {
    this.AccountService.register(this.model).subscribe({
      next: (res) => {
        this.toast.success('Registration successful');
        this.cancel();
         
      },
      error: (error) => {
        console.log(error.error.errors.registerDto[0]);

        console.log(error.title)
        this.toast.error(error.error.errors.registerDto[0])},
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
