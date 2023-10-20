import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchasingFeatComponent } from './purchasing-feat.component';

describe('PurchasingFeatComponent', () => {
  let component: PurchasingFeatComponent;
  let fixture: ComponentFixture<PurchasingFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingFeatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasingFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
