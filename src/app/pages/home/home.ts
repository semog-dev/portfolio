import { Component } from '@angular/core';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Experience, Skills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
