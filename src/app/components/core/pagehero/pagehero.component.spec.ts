import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageheroComponent } from './pagehero.component';

describe('PageheroComponent', () => {
  let component: PageheroComponent;
  let fixture: ComponentFixture<PageheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
