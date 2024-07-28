import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _theme: 'light' | 'dark' = 'light';

  constructor() {
  }

  public detectTheme(): string {
    if (typeof window !== "undefined") {
      // detect theme preference from window object
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this._theme = prefersDark.matches ? 'dark' : 'light';
      return this._theme;
    } else {
      return 'light';
    }
    
  }
}
