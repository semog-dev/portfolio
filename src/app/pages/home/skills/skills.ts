import { Component } from '@angular/core';
import { skillGroups } from '../../../shared/data/content';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly skillGroups = skillGroups;
}
