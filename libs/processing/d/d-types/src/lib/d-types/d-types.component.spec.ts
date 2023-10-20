import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DTypesComponent } from './d-types.component';

describe('DTypesComponent', () => {
  let component: DTypesComponent;
  let fixture: ComponentFixture<DTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
