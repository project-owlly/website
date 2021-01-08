import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBundComponent } from './progress-bund.component';

describe('ProgressBundComponent', () => {
  let component: ProgressBundComponent;
  let fixture: ComponentFixture<ProgressBundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
