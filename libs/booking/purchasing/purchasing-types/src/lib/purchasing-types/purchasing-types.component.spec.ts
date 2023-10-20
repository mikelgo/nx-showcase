import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchasingTypesComponent } from './purchasing-types.component';

describe('PurchasingTypesComponent', () => {
  let component: PurchasingTypesComponent;
  let fixture: ComponentFixture<PurchasingTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasingTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
