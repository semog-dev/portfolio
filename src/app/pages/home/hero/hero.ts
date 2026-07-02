import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrandIcon } from '../../../shared/icons/brand-icon';
import { hero, socialLinks } from '../../../shared/data/content';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, BrandIcon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly hero = hero;
  protected readonly socialLinks = socialLinks;
}
