import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CFeatComponent } from './c-feat.component';

describe('CFeatComponent', () => {
  let component: CFeatComponent;
  let fixture: ComponentFixture<CFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CFeatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
