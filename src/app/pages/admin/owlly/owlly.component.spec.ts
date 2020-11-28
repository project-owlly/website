import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OwllyComponent} from './owlly.component';

describe('OwllyComponent', () => {
  let component: OwllyComponent;
  let fixture: ComponentFixture<OwllyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwllyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwllyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
