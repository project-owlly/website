import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OwllyDetailComponent} from './owlly-detail.component';

describe('OwllyDetailComponent', () => {
  let component: OwllyDetailComponent;
  let fixture: ComponentFixture<OwllyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwllyDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwllyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
