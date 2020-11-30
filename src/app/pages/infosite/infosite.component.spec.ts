import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfositeComponent } from './infosite.component';

describe('InfositeComponent', () => {
  let component: InfositeComponent;
  let fixture: ComponentFixture<InfositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfositeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
