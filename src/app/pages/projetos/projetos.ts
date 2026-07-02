import { Component, inject } from '@angular/core';
import { ExternalLink, GitFork, Github, LucideAngularModule, Star } from 'lucide-angular';
import { projetosPage, socialLinks } from '../../shared/data/content';
import { ProjectsService } from '../../shared/services/projects.service';

@Component({
  selector: 'app-projetos',
  imports: [LucideAngularModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  private readonly projectsService = inject(ProjectsService);

  protected readonly projects = this.projectsService.projects;
  protected readonly content = projetosPage;
  protected readonly socialLinks = socialLinks;

  protected readonly GithubIcon = Github;
  protected readonly StarIcon = Star;
  protected readonly GitForkIcon = GitFork;
  protected readonly ExternalLinkIcon = ExternalLink;
}
