import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductAllComponent } from './show-product-all.component';

describe('ShowProductAllComponent', () => {
  let component: ShowProductAllComponent;
  let fixture: ComponentFixture<ShowProductAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
