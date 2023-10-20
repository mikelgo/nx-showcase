import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BFeatComponent } from './b-feat.component';

describe('BFeatComponent', () => {
  let component: BFeatComponent;
  let fixture: ComponentFixture<BFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BFeatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
