import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Project } from '../types/project.type';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  readonly projects = httpResource<Project[]>(() => '/api/projetos', {
    defaultValue: [],
  });
}
