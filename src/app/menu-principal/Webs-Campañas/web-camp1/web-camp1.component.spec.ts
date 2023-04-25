import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCamp1Component } from './web-camp1.component';

describe('WebCamp1Component', () => {
  let component: WebCamp1Component;
  let fixture: ComponentFixture<WebCamp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCamp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCamp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
