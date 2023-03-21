import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebJuvenilComponent } from './web-juvenil.component';

describe('WebJuvenilComponent', () => {
  let component: WebJuvenilComponent;
  let fixture: ComponentFixture<WebJuvenilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebJuvenilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebJuvenilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
