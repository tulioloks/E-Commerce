import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaPagamentoListarComponent } from './forma-pagamento-listar.component';

describe('FormaPagamentoListarComponent', () => {
  let component: FormaPagamentoListarComponent;
  let fixture: ComponentFixture<FormaPagamentoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormaPagamentoListarComponent]
    });
    fixture = TestBed.createComponent(FormaPagamentoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
