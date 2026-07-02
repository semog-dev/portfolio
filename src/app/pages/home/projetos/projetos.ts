import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { projetosPage, socialLinks } from '../../../shared/data/content';
import { BrandIcon } from '../../../shared/icons/brand-icon';
import { ProjectsService } from '../../../shared/services/projects.service';

@Component({
  selector: 'app-projetos',
  imports: [MatButtonModule, MatIconModule, BrandIcon],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos {
  private readonly projectsService = inject(ProjectsService);

  protected readonly projects = this.projectsService.projects;
  protected readonly content = projetosPage;
  protected readonly socialLinks = socialLinks;
  protected readonly skeletons = [1, 2, 3, 4, 5, 6];
}
