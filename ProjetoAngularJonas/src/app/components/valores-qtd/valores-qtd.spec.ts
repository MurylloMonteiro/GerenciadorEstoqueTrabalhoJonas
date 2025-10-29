import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresQtd } from './valores-qtd';

describe('ValoresQtd', () => {
  let component: ValoresQtd;
  let fixture: ComponentFixture<ValoresQtd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoresQtd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoresQtd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
