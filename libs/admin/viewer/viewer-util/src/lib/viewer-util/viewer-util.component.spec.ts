import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewerUtilComponent } from './viewer-util.component';

describe('ViewerUtilComponent', () => {
  let component: ViewerUtilComponent;
  let fixture: ComponentFixture<ViewerUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewerUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewerUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
