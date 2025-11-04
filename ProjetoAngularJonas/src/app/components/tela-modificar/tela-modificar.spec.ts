import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaModificar } from './tela-modificar';

describe('TelaModificar', () => {
  let component: TelaModificar;
  let fixture: ComponentFixture<TelaModificar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaModificar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaModificar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
