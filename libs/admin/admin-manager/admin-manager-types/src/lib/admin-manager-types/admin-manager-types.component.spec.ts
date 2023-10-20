import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminManagerTypesComponent } from './admin-manager-types.component';

describe('AdminManagerTypesComponent', () => {
  let component: AdminManagerTypesComponent;
  let fixture: ComponentFixture<AdminManagerTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManagerTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminManagerTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
