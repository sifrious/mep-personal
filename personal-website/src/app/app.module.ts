import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { WritingComponent } from './writing/writing.component';
import { VisualComponent } from './visual/visual.component';
import { AboutComponent } from './about/about.component';
import { IconsComponent } from './home/icons/icons.component';
import { ProjecthighlightsComponent } from './home/projecthighlights/projecthighlights.component';
import { HomemainComponent } from './home/homemain/homemain.component';
import { MakingComponent } from './home/homemain/making/making.component';
import { UsingComponent } from './home/homemain/using/using.component';
import { DiggingComponent } from './home/homemain/digging/digging.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ResumeComponent,
    WritingComponent,
    VisualComponent,
    AboutComponent,
    IconsComponent,
    ProjecthighlightsComponent,
    HomemainComponent,
    MakingComponent,
    UsingComponent,
    DiggingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
