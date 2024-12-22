import { AccountService } from './../_services/account.service';
import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  cancelRegister = output<boolean>();

  register() {
    console.log(this.model);
    this.AccountService.register(this.model).subscribe({
      next: (res) => {
        console.log('registration successful');
        console.log(res);
        this.cancel();
      },
      error: (error) => console.log(error),
    });
  }

  cancel() {
    console.log('cancelled');
    this.cancelRegister.emit(false);
  }
}
