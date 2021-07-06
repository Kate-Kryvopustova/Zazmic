import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdidProfileComponent } from './edid-profile.component';

describe('EdidProfileComponent', () => {
  let component: EdidProfileComponent;
  let fixture: ComponentFixture<EdidProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdidProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdidProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
