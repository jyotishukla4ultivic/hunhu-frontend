// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { ThemeColors } from '../../models/theme.model';
// import { TitleCasePipe } from '@angular/common';

// @Component({
//   selector: 'app-theme-picker',
//   standalone: true,
//   imports: [TitleCasePipe],
//   templateUrl: './theme-picker.component.html',
//   styleUrls: ['./theme-picker.component.css']
// })
// export class ThemePickerComponent {
//   @Input() theme: ThemeColors = {
//     primary: '#3B82F6',
//     secondary: '#22C55E',
//     background: '#F4F6FA',
//     card: '#FFFFFF',
//     text: '#111827',
//   };
//   @Output() themeChange = new EventEmitter<ThemeColors>();

//   themeKeys: (keyof ThemeColors)[] = ['primary', 'secondary', 'background', 'card', 'text'];
//   updateColor(key: keyof ThemeColors, event: Event) {
//   const input = event.target as HTMLInputElement;
//   const value = input?.value || '';
//   this.theme = { ...this.theme, [key]: value };
//   this.themeChange.emit(this.theme);
// }


//   // updateColor(key: keyof ThemeColors, event: Event) {
//   //   const value = (event.target as HTMLInputElement).value;
//   //   this.theme = { ...this.theme, [key]: value };
//   //   this.themeChange.emit(this.theme);
//   // }
// } 

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeColors } from '../../models/theme.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css']
})
export class ThemePickerComponent {
  @Input() theme: ThemeColors = {
    primary: '#3B82F6',
    secondary: '#22C55E',
    background: '#F4F6FA',
    card: '#FFFFFF',
    text: '#111827',
  };

  @Output() themeChange = new EventEmitter<ThemeColors>();

  themeKeys: (keyof ThemeColors)[] = ['primary', 'secondary', 'background', 'card', 'text'];

  updateColor(key: keyof ThemeColors, event: Event) {
  const input = event.target as HTMLInputElement;
  const value = input?.value || '';
  this.theme = { ...this.theme, [key]: value };
  this.themeChange.emit(this.theme);
}

  getColor(key: keyof ThemeColors): string {
    return this.theme?.[key] || '';
  }
}
