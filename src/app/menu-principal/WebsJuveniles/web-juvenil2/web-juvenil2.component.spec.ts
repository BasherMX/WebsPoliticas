import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebJuvenil2Component } from './web-juvenil2.component';

describe('WebJuvenil2Component', () => {
  let component: WebJuvenil2Component;
  let fixture: ComponentFixture<WebJuvenil2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebJuvenil2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebJuvenil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
