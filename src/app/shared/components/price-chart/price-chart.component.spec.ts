import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceChartComponent } from './price-chart.component';

describe('PriceChartComponent', () => {
  let component: PriceChartComponent;
  let fixture: ComponentFixture<PriceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
