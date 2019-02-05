import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashOptionComponent } from './flash-option.component';

describe('FlashOptionComponent', () => {
  let component: FlashOptionComponent;
  let fixture: ComponentFixture<FlashOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
