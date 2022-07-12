import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiggingComponent } from './digging.component';

describe('DiggingComponent', () => {
  let component: DiggingComponent;
  let fixture: ComponentFixture<DiggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiggingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
