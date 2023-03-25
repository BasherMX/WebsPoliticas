import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInformes1Component } from './web-informes1.component';

describe('WebInformes1Component', () => {
  let component: WebInformes1Component;
  let fixture: ComponentFixture<WebInformes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebInformes1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebInformes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
