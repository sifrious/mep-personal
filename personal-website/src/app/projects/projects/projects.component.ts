import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { Project, ProjectLocation } from 'src/app/projects';

@Component({
  selector: 'projects-list',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectListComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService:ProjectService) { }
  
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }
  
  ngOnInit(): void {
    this.getProjects();
  }
}
