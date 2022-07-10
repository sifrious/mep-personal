import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingComponent } from './making.component';

describe('MakingComponent', () => {
  let component: MakingComponent;
  let fixture: ComponentFixture<MakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
