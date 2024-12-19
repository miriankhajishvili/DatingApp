import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Client';

  http = inject(HttpClient);
  users: any

  ngOnInit(): void {
    this.http
      .get('https://localhost:5001/api/users')
      .subscribe((res) => this.users = res);
  }
}
