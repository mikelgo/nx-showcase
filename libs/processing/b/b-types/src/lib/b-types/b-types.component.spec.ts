import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BTypesComponent } from './b-types.component';

describe('BTypesComponent', () => {
  let component: BTypesComponent;
  let fixture: ComponentFixture<BTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
