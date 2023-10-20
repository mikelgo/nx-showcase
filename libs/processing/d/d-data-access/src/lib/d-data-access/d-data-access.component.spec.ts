import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DDataAccessComponent } from './d-data-access.component';

describe('DDataAccessComponent', () => {
  let component: DDataAccessComponent;
  let fixture: ComponentFixture<DDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
