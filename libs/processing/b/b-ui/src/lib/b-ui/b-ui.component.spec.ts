import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BUiComponent } from './b-ui.component';

describe('BUiComponent', () => {
  let component: BUiComponent;
  let fixture: ComponentFixture<BUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
