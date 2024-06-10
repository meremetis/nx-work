import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureGameDetailComponent } from './feature-game-detail.component';

describe('FeatureGameDetailComponent', () => {
  let component: FeatureGameDetailComponent;
  let fixture: ComponentFixture<FeatureGameDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureGameDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
