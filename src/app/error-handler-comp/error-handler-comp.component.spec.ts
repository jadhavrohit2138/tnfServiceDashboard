import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlerCompComponent } from './error-handler-comp.component';

describe('ErrorHandlerCompComponent', () => {
  let component: ErrorHandlerCompComponent;
  let fixture: ComponentFixture<ErrorHandlerCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHandlerCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandlerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
