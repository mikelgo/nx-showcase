import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellProcessingComponent } from './shell-processing.component';

describe('ShellProcessingComponent', () => {
  let component: ShellProcessingComponent;
  let fixture: ComponentFixture<ShellProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellProcessingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
