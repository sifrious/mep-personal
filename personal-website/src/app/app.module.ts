import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//module imports
import { HeaderModule } from './header/header.module';
import { ResumeModule } from './resume/resume.module';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
//form imports
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavigationRoutesComponent } from './navigation-routes/navigation-routes.component';
//service imports
import { TechSkillService } from './tech-skill.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    ResumeComponent,
    HomeComponent,
    ProjectsComponent,
    HeaderComponent,
    NavigationRoutesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HeaderModule,
    ResumeModule,
    HomeModule,
    ProjectsModule
  ],
  providers: [TechSkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
