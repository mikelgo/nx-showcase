import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentFeatComponent } from './payment-feat.component';

describe('PaymentFeatComponent', () => {
  let component: PaymentFeatComponent;
  let fixture: ComponentFixture<PaymentFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentFeatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
