import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewerTypesComponent } from './viewer-types.component';

describe('ViewerTypesComponent', () => {
  let component: ViewerTypesComponent;
  let fixture: ComponentFixture<ViewerTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewerTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewerTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
