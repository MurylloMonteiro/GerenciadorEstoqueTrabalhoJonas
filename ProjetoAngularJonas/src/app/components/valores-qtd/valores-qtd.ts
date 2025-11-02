import { Component, DoCheck, OnInit } from '@angular/core';
import { ValorTotal } from '../itens/itens';
import { Qtd } from '../itens/itens';
import { QtdProdutos } from '../itens/itens';
@Component({
  selector: 'app-valores-qtd',
  imports: [],
  templateUrl: './valores-qtd.html',
  styleUrl: './valores-qtd.css',
})
export class ValoresQtd implements DoCheck {
  ngDoCheck() {
    this.QtdProdMod = QtdProdutos
    this.ValorMod = ValorTotal;
    this.QtdMod = Qtd;
  }

  ValorMod: number = 0;
  QtdMod: number = 0;
  QtdProdMod: number = 0;




}
