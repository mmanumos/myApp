import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPedidoPage } from './form-pedido.page';

describe('FormPedidoPage', () => {
  let component: FormPedidoPage;
  let fixture: ComponentFixture<FormPedidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
