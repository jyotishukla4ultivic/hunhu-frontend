import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textarea-field.html',
  styleUrl: './textarea-field.css'
})
export class TextareaFieldComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() maxlength: number = 120;
  @Input() rows: number = 2;
  @Input() disabled: boolean = false;
  @Output() valueChange = new EventEmitter<string>();
}
