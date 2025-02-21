import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDetailComponent } from './market-detail.component';

describe('MarketDetailComponent', () => {
  let component: MarketDetailComponent;
  let fixture: ComponentFixture<MarketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
