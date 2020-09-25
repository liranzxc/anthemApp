import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanProfileComponent } from './human-profile.component';

describe('HumanProfileComponent', () => {
  let component: HumanProfileComponent;
  let fixture: ComponentFixture<HumanProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
