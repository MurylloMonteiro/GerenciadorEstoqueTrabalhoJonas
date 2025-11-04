import { Component } from '@angular/core';
import { Pesquisa } from "../../components/pesquisa/pesquisa";
import { Itens } from "../../components/itens/itens";
import { ValoresQtd } from "../../components/valores-qtd/valores-qtd";
import { TelaAdicionar } from "../../components/tela-adicionar/tela-adicionar";
import { TelaModificar } from "../../components/tela-modificar/tela-modificar";

@Component({
  selector: 'app-home',
  imports: [Pesquisa, Itens, ValoresQtd, TelaAdicionar, TelaModificar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
