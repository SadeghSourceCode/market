import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPriceChangesComponent } from './market-price-changes.component';

describe('MarketPriceChangesComponent', () => {
  let component: MarketPriceChangesComponent;
  let fixture: ComponentFixture<MarketPriceChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketPriceChangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketPriceChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
