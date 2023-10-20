import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchasingUiComponent } from './purchasing-ui.component';

describe('PurchasingUiComponent', () => {
  let component: PurchasingUiComponent;
  let fixture: ComponentFixture<PurchasingUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
