import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CDataAccessComponent } from './c-data-access.component';

describe('CDataAccessComponent', () => {
  let component: CDataAccessComponent;
  let fixture: ComponentFixture<CDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
