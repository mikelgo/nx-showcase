import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentUtilComponent } from './payment-util.component';

describe('PaymentUtilComponent', () => {
  let component: PaymentUtilComponent;
  let fixture: ComponentFixture<PaymentUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
