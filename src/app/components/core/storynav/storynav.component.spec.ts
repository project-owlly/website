import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorynavComponent } from './storynav.component';

describe('StorynavComponent', () => {
  let component: StorynavComponent;
  let fixture: ComponentFixture<StorynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorynavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
