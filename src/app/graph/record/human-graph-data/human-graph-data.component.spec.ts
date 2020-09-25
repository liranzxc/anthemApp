import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanGraphDataComponent } from './human-graph-data.component';

describe('HumanGraphDataComponent', () => {
  let component: HumanGraphDataComponent;
  let fixture: ComponentFixture<HumanGraphDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanGraphDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanGraphDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
