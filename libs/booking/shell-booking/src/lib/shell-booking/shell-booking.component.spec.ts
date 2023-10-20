import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellBookingComponent } from './shell-booking.component';

describe('ShellBookingComponent', () => {
  let component: ShellBookingComponent;
  let fixture: ComponentFixture<ShellBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellBookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
