import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPageManagerComponent } from './cards-page-manager.component';

describe('CardsPageManagerComponent', () => {
  let component: CardsPageManagerComponent;
  let fixture: ComponentFixture<CardsPageManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPageManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsPageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
