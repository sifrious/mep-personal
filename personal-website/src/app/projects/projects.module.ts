import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './projects/projects.component';
import { ProjectTagsComponent } from './tags/tags.component';
import { ProjectUpdatesComponent } from './updates/updates.component';


@NgModule({
  declarations: [ProjectListComponent, ProjectTagsComponent, ProjectUpdatesComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectListComponent, ProjectTagsComponent, ProjectUpdatesComponent]
})
export class ProjectsModule { }
