import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveCanvasComponent } from './curve-canvas.component';

describe('CurveCanvasComponent', () => {
  let component: CurveCanvasComponent;
  let fixture: ComponentFixture<CurveCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurveCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurveCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
