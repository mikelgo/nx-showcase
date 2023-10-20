import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentUiComponent } from './payment-ui.component';

describe('PaymentUiComponent', () => {
  let component: PaymentUiComponent;
  let fixture: ComponentFixture<PaymentUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
