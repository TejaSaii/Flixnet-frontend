import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../types/User';
import { HttpClient } from '@angular/common/http';
import { AuthRes } from '../../types/AuthRes';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-signup-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup-content.component.html',
  styleUrl: './signup-content.component.css'
})

export class SignupContentComponent {
  apiUrl = environment.apiUrl;

  formData: User = {
    email: "",
    password: "",
    age: 0
  }

  showError: boolean = false;

  private http: HttpClient;
  constructor(http: HttpClient, private router:Router) {
    this.http = http;
    this.router = router;
  }

  onSubmit() {
    this.http.post<AuthRes>(`${this.apiUrl}/auth/signup`, this.formData)
    // this.http.post<AuthRes>(`localhost:3000/auth/signup`, this.formData)
      .subscribe({
        next: (v) => {
          localStorage.setItem("token", v.token);
          this.router.navigate(['/videos']);
        },
        error: () => {
          this.showError = true;
        }
      });
  }
}
