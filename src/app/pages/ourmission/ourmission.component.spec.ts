import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurmissionComponent } from './ourmission.component';

describe('OurmissionComponent', () => {
  let component: OurmissionComponent;
  let fixture: ComponentFixture<OurmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
