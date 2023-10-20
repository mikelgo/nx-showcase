import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellAdminComponent } from './shell-admin.component';

describe('ShellAdminComponent', () => {
  let component: ShellAdminComponent;
  let fixture: ComponentFixture<ShellAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
