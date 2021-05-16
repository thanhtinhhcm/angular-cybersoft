import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRapComponent } from './card-rap.component';

describe('CardRapComponent', () => {
  let component: CardRapComponent;
  let fixture: ComponentFixture<CardRapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
