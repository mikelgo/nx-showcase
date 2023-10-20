import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CTypesComponent } from './c-types.component';

describe('CTypesComponent', () => {
  let component: CTypesComponent;
  let fixture: ComponentFixture<CTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
