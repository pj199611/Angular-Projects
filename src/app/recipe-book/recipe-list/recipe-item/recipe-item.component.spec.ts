import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeITemComponent } from './recipe-item.component';

describe('RecipeITemComponent', () => {
  let component: RecipeITemComponent;
  let fixture: ComponentFixture<RecipeITemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeITemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeITemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
