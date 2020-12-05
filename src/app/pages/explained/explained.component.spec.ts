import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainedComponent } from './explained.component';

describe('ExplainedComponent', () => {
  let component: ExplainedComponent;
  let fixture: ComponentFixture<ExplainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
