import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchasingDataAccessComponent } from './purchasing-data-access.component';

describe('PurchasingDataAccessComponent', () => {
  let component: PurchasingDataAccessComponent;
  let fixture: ComponentFixture<PurchasingDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasingDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
