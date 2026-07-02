import { PLATFORM_ID, Injectable, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'semogdev-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // isPlatformBrowser alone isn't enough to guarantee `localStorage`/`window`
  // are usable — the Vitest+jsdom unit test environment reports as "browser"
  // but doesn't provide a real localStorage, so every access below is also
  // guarded by its own existence check.
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>(this.readInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.theme();
      if (!this.isBrowser) return;
      document.documentElement.classList.toggle('dark', theme === 'dark');
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, theme);
      }
    });
  }

  toggle(): void {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  private readInitialTheme(): Theme {
    if (!this.isBrowser) return 'light';

    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    }

    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }

    return 'light';
  }
}
