import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DUiComponent } from './d-ui.component';

describe('DUiComponent', () => {
  let component: DUiComponent;
  let fixture: ComponentFixture<DUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
