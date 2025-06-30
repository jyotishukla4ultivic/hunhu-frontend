import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-agency-signin',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './agency-signin.html',
  styleUrls: ['./agency-signin.css'],
})
export class AgencySignin {
  constructor(private router: Router) {}

  onSignIn() {
    // TODO: Add actual authentication logic here
    this.router.navigate(['/agency/dashboard']);
  }
} 