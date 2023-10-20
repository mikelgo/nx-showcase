import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DFeatComponent } from './d-feat.component';

describe('DFeatComponent', () => {
  let component: DFeatComponent;
  let fixture: ComponentFixture<DFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DFeatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
