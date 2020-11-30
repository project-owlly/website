import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscardComponent } from './newscard.component';

describe('NewscardComponent', () => {
  let component: NewscardComponent;
  let fixture: ComponentFixture<NewscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
