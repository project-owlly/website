import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CertifyDetailComponent} from './certify-detail.component';

describe('CertifyDetailComponent', () => {
  let component: CertifyDetailComponent;
  let fixture: ComponentFixture<CertifyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertifyDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
