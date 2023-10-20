import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewerFeatComponent } from './viewer-feat.component';

describe('ViewerFeatComponent', () => {
  let component: ViewerFeatComponent;
  let fixture: ComponentFixture<ViewerFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewerFeatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewerFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
