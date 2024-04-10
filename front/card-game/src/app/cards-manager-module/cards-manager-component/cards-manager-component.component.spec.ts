import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsManagerComponentComponent } from './cards-manager-component.component';

describe('CardsManagerComponentComponent', () => {
  let component: CardsManagerComponentComponent;
  let fixture: ComponentFixture<CardsManagerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsManagerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsManagerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
