import { Component } from '@angular/core';
import { About } from './about/about';
import { Contato } from './contato/contato';
import { Experience } from './experience/experience';
import { Hero } from './hero/hero';
import { Projetos } from './projetos/projetos';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Experience, Skills, Projetos, Contato],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
