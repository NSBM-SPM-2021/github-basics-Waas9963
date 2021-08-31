import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsCartComponent } from './parts-cart.component';

describe('PartsCartComponent', () => {
  let component: PartsCartComponent;
  let fixture: ComponentFixture<PartsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
