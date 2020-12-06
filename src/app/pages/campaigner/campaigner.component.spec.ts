import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignerComponent } from './campaigner.component';

describe('CampaignerComponent', () => {
  let component: CampaignerComponent;
  let fixture: ComponentFixture<CampaignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
