import { Component } from '@angular/core';
import { Pesquisa } from "../../components/pesquisa/pesquisa";
import { Itens } from "../../components/itens/itens";
import { ValoresQtd } from "../../components/valores-qtd/valores-qtd";

@Component({
  selector: 'app-home',
  imports: [Pesquisa, Itens, ValoresQtd],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
