import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProductComponent } from './start-product.component';

describe('StartProductComponent', () => {
  let component: StartProductComponent;
  let fixture: ComponentFixture<StartProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
