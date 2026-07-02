import { Component } from '@angular/core';
import { skillGroups } from '../../../shared/data/content';

const CATEGORY_COLOR_VARIANT: Record<string, string> = {
  Backend: 'blue',
  Frontend: 'green',
  Ferramentas: 'amber',
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skillGroups = skillGroups;

  protected colorVariant(category: string): string {
    return CATEGORY_COLOR_VARIANT[category] ?? 'blue';
  }
}
