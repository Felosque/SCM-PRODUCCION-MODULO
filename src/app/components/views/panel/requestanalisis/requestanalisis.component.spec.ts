import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestanalisisComponent } from './requestanalisis.component';

describe('RequestanalisisComponent', () => {
  let component: RequestanalisisComponent;
  let fixture: ComponentFixture<RequestanalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestanalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestanalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
