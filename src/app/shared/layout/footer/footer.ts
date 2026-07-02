import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { BrandIcon } from '../../icons/brand-icon';
import { about, footerText, navItems, site, socialLinks } from '../../data/content';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule, BrandIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly footerText = footerText;
  protected readonly navItems = navItems;
  protected readonly socialLinks = socialLinks;
  protected readonly tagline = site.description;
  protected readonly cvUrl = about.cvUrl;
  protected readonly year = new Date().getFullYear();

  protected scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
