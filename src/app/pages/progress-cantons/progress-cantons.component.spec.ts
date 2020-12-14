import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCantonsComponent } from './progress-cantons.component';

describe('ProgressCantonsComponent', () => {
  let component: ProgressCantonsComponent;
  let fixture: ComponentFixture<ProgressCantonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressCantonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCantonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
