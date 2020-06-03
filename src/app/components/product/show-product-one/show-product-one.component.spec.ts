import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductOneComponent } from './show-product-one.component';

describe('ShowProductOneComponent', () => {
  let component: ShowProductOneComponent;
  let fixture: ComponentFixture<ShowProductOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
