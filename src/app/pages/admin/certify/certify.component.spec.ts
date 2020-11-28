import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CertifyComponent} from './certify.component';

describe('CertifyComponent', () => {
  let component: CertifyComponent;
  let fixture: ComponentFixture<CertifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertifyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
