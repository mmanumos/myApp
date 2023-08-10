import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPedidoPage } from './form-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: FormPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPedidoPageRoutingModule {}
