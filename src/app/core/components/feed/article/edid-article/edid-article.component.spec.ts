import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdidArticleComponent } from './edid-article.component';

describe('EdidArticleComponent', () => {
  let component: EdidArticleComponent;
  let fixture: ComponentFixture<EdidArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdidArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdidArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
