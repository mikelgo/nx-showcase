import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminManagerDataAccessComponent } from './admin-manager-data-access.component';

describe('AdminManagerDataAccessComponent', () => {
  let component: AdminManagerDataAccessComponent;
  let fixture: ComponentFixture<AdminManagerDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManagerDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminManagerDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
