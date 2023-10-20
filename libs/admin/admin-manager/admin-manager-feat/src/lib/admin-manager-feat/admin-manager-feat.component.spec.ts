import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminManagerFeatComponent } from './admin-manager-feat.component';

describe('AdminManagerFeatComponent', () => {
  let component: AdminManagerFeatComponent;
  let fixture: ComponentFixture<AdminManagerFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManagerFeatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminManagerFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
