import { Component } from '@angular/core';
import { experiences } from '../../../shared/data/content';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly experiences = experiences;
}
