import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeColors } from '../models/theme.model';

const DEFAULT_THEME: ThemeColors = {
  primary: '#3B82F6',
  secondary: '#22C55E',
  background: '#F4F6FA',
  card: '#FFFFFF',
  text: '#111827',
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeSubject = new BehaviorSubject<ThemeColors>(DEFAULT_THEME);
  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.applyTheme(DEFAULT_THEME);
  }

  setTheme(theme: ThemeColors) {
    this.themeSubject.next(theme);
    this.applyTheme(theme);
  }

  getTheme(): ThemeColors {
    return this.themeSubject.value;
  }

  private applyTheme(theme: ThemeColors) {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--card', theme.card);
    root.style.setProperty('--text', theme.text);
  }
} 