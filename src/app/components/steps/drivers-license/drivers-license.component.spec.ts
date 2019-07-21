import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversLicenseComponent } from './drivers-license.component';

describe('DriversLicenseComponent', () => {
  let component: DriversLicenseComponent;
  let fixture: ComponentFixture<DriversLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
