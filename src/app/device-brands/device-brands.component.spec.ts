import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceBrandsComponent } from './device-brands.component';

describe('DeviceBrandsComponent', () => {
  let component: DeviceBrandsComponent;
  let fixture: ComponentFixture<DeviceBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
