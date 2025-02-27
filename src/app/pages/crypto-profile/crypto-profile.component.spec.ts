import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoProfileComponent } from './crypto-profile.component';

describe('CryptoProfileComponent', () => {
  let component: CryptoProfileComponent;
  let fixture: ComponentFixture<CryptoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
