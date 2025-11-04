import { Component, Injectable, ViewChild} from '@angular/core';
import { EstadoGlobal } from '../tela-adicionar/tela-adicionar';




@Component({
  selector: 'app-pesquisa',
  imports: [],
  templateUrl: './pesquisa.html',
  styleUrl: './pesquisa.css',
})
export class Pesquisa  {
  
  

  
  //Serve para abrir a tela adicionar Produto
  abrir(){
    EstadoGlobal.ativo = true
  }
 



 


}
