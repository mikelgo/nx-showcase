import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUiComponent } from './c-ui.component';

describe('CUiComponent', () => {
  let component: CUiComponent;
  let fixture: ComponentFixture<CUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
