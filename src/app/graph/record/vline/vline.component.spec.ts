import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VlineComponent} from './vline.component';

describe('VlineComponent', () => {
  let component: VlineComponent;
  let fixture: ComponentFixture<VlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
