import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-test-errors',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css',
})
export class TestErrorsComponent {
  private baseUrl = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  validationErrors: string[] = [];

  error400() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe({
      next: (res) => console.log(res),
      // error: (error) => console.log(error),
    });
  }

  error401() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error),
    });
  }
  error404() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error),
    });
  }
  error500() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error),
    });
  }
  error400Validations() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe({
      next: (res) => console.log(res),
      error: (error) => {
        this.validationErrors = error;
        console.log(this.validationErrors)
      },
    });
  }
}
