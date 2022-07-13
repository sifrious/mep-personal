import { Injectable } from '@angular/core';
import { Projects, Project, ProjectLocation } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects(): Project[] {
    return Projects
  }

  constructor() { }
}
