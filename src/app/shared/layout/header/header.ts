import { toSignal } from '@angular/core/rxjs-interop';
import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { navItems } from '../../data/content';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);

  protected readonly navItems = navItems;
  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);

  // Só a Home tem um hero escuro grande sob a navbar; nas demais rotas o
  // fundo já é claro desde o topo, então a navbar precisa nascer com o skin
  // "branco com sombra" mesmo sem ter rolado a página.
  private readonly isHomeRoute = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects === '/')
    ),
    { initialValue: this.router.url === '/' }
  );

  protected readonly useLightSkin = computed(() => !this.isHomeRoute() || this.scrolled());

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }
}
