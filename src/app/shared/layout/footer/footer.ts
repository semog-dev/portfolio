import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { BrandIcon } from '../../icons/brand-icon';
import { footerText, navItems, socialLinks } from '../../data/content';

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
}
