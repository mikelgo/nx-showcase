import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminManagerUiComponent } from './admin-manager-ui.component';

describe('AdminManagerUiComponent', () => {
  let component: AdminManagerUiComponent;
  let fixture: ComponentFixture<AdminManagerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManagerUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminManagerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
