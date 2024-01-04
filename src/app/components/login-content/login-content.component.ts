import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../types/User';
import { HttpClient } from '@angular/common/http';
import { AuthRes } from '../../types/AuthRes';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-content.component.html',
  styleUrl: './login-content.component.css'
})
export class LoginContentComponent {
  apiUrl = environment.apiUrl;
  
  formData: User = {
    email: "",
    password: "",
  }

  showError: boolean = false;

  private http: HttpClient;
  constructor(http: HttpClient, private router: Router) {
    this.http = http;
  }

  onSubmit() {
    this.http.post<AuthRes>(`${this.apiUrl}/auth/login`, this.formData)
      .subscribe({
        next: (v) => {
          localStorage.setItem("token", v.token);
          this.router.navigate(['/videos'])
        },
        error: () => {
          this.showError = true;
        }
      });
  }
}
