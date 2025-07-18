import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule // <-- Added for ngModel support
  ],
  templateUrl: './signin.html',
  styleUrls: ['./signin.css'],
})
export class Signin {
  email = '';
  password = '';
  timezone = (() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz === 'Asia/Calcutta' ? 'Asia/Kolkata' : tz;
  })();

  constructor(private router: Router, private authService: AuthService) {}

  onSignIn() {
    const payload = { email: this.email.trim(), password: this.password, timezone: this.timezone };
    console.log('Login payload:', payload);
    this.authService.login(payload)
      .subscribe({
        next: (response) => {
          // Store token in localStorage
          if (response?.data?.token) {
            localStorage.setItem('auth_token', response.data.token);
          }
          this.router.navigate(['/admin/dashboard']);
        },
        error: (error) => {
          // Handle error (e.g., show error message)
          console.error('Login failed', error);
        }
      });
  }
}
