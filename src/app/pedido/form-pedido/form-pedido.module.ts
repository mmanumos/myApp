import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPedidoPageRoutingModule } from './form-pedido-routing.module';

import { FormPedidoPage } from './form-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPedidoPageRoutingModule
  ],
  declarations: [FormPedidoPage]
})
export class FormPedidoPageModule {}
