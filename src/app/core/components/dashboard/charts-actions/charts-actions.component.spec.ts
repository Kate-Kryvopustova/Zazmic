import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsActionsComponent } from './charts-actions.component';

describe('ChartsActionsComponent', () => {
  let component: ChartsActionsComponent;
  let fixture: ComponentFixture<ChartsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
