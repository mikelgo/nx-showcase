import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AFeatComponent } from './a-feat.component';

describe('AFeatComponent', () => {
  let component: AFeatComponent;
  let fixture: ComponentFixture<AFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AFeatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
