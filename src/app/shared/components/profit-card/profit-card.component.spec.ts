import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitCardComponent } from './profit-card.component';

describe('ProfitCardComponent', () => {
  let component: ProfitCardComponent;
  let fixture: ComponentFixture<ProfitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfitCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
