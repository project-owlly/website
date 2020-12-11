import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CertifyRequestComponent} from './certify-request.component';

describe('CertifyRequestComponent', () => {
  let component: CertifyRequestComponent;
  let fixture: ComponentFixture<CertifyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertifyRequestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
