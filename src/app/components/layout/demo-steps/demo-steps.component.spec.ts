import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStepsComponent } from './demo-steps.component';

describe('DemoStepsComponent', () => {
  let component: DemoStepsComponent;
  let fixture: ComponentFixture<DemoStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
