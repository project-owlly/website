import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwissmapComponent } from './swissmap.component';

describe('SwissmapComponent', () => {
  let component: SwissmapComponent;
  let fixture: ComponentFixture<SwissmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwissmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwissmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
