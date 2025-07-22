import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown-field.html',
  styleUrl: './dropdown-field.css'
})
export class DropdownFieldComponent {
  @Input() label: string = '';
  @Input() options: { value: string, label: string }[] = [];
  @Input() value: string = '';
  @Input() placeholder: string = 'Select...';
  @Input() disabled: boolean = false;
  @Output() valueChange = new EventEmitter<string>();
}
