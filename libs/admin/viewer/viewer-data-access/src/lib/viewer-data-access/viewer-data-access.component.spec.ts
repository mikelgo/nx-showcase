import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewerDataAccessComponent } from './viewer-data-access.component';

describe('ViewerDataAccessComponent', () => {
  let component: ViewerDataAccessComponent;
  let fixture: ComponentFixture<ViewerDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewerDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewerDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
