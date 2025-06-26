import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-root',
  standalone: true,            // Add this if you use standalone components
  imports: [RouterOutlet, MatFormFieldModule,
    MatInputModule,],
  templateUrl: './app.html',  // Use .component.html by Angular style
  styleUrls: ['./app.css']    // should be "styleUrls" (plural)
})
export class AppComponent {
  title = 'hunhu-frontend';
}
