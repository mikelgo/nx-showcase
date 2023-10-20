import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ADataAccessComponent } from './a-data-access.component';

describe('ADataAccessComponent', () => {
  let component: ADataAccessComponent;
  let fixture: ComponentFixture<ADataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ADataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
