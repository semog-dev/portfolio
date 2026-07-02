import { Component } from '@angular/core';
import { Github, Linkedin, LucideAngularModule } from 'lucide-angular';
import { hero, socialLinks } from '../../../shared/data/content';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly hero = hero;
  protected readonly socialLinks = socialLinks;

  protected readonly GithubIcon = Github;
  protected readonly LinkedinIcon = Linkedin;
}
