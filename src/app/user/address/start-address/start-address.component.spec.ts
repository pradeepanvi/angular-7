import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAddressComponent } from './start-address.component';

describe('StartAddressComponent', () => {
  let component: StartAddressComponent;
  let fixture: ComponentFixture<StartAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
