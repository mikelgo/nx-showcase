import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentDataAccessComponent } from './payment-data-access.component';

describe('PaymentDataAccessComponent', () => {
  let component: PaymentDataAccessComponent;
  let fixture: ComponentFixture<PaymentDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
