import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAdicionar } from './tela-adicionar';

describe('TelaAdicionar', () => {
  let component: TelaAdicionar;
  let fixture: ComponentFixture<TelaAdicionar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAdicionar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAdicionar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
