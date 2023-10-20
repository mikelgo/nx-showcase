import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchasingUtilComponent } from './purchasing-util.component';

describe('PurchasingUtilComponent', () => {
  let component: PurchasingUtilComponent;
  let fixture: ComponentFixture<PurchasingUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasingUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
