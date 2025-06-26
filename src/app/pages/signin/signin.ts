import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './signin.html',
  styleUrls: ['./signin.css'],
})
export class Signin {
  constructor(private router: Router) {}

  onSignIn() {
    // TODO: Add actual authentication logic here
    this.router.navigate(['/admin/dashboard']);
  }
}
