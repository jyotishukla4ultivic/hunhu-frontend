import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,            // Add this if you use standalone components
  imports: [RouterOutlet, MatFormFieldModule,
    MatInputModule, TranslateModule],
  templateUrl: './app.html',  // Use .component.html by Angular style
  styleUrls: ['./app.css']    // should be "styleUrls" (plural)
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang() || 'en';
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
