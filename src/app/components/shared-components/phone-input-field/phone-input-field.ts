import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phone-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './phone-input-field.html',
  styleUrl: './phone-input-field.css'
})
export class PhoneInputFieldComponent {
  @Input() label: string = '';
  @Input() countryCode: string = 'IND(+91)';
  @Input() phone: string = '';
  @Input() placeholder: string = '0000-00-0000';
  @Input() disabled: boolean = false;
  @Output() phoneChange = new EventEmitter<string>();
}
