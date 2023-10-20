import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ATypesComponent } from './a-types.component';

describe('ATypesComponent', () => {
  let component: ATypesComponent;
  let fixture: ComponentFixture<ATypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ATypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ATypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
