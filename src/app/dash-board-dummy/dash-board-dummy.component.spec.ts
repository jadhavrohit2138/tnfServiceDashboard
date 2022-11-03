import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardDummyComponent } from './dash-board-dummy.component';

describe('DashBoardDummyComponent', () => {
  let component: DashBoardDummyComponent;
  let fixture: ComponentFixture<DashBoardDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardDummyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoardDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
