import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictGraphComponent } from './predict-graph.component';

describe('PredictGraphComponent', () => {
  let component: PredictGraphComponent;
  let fixture: ComponentFixture<PredictGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
