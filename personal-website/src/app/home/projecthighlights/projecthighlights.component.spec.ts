import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecthighlightsComponent } from './projecthighlights.component';

describe('ProjecthighlightsComponent', () => {
  let component: ProjecthighlightsComponent;
  let fixture: ComponentFixture<ProjecthighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjecthighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjecthighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
