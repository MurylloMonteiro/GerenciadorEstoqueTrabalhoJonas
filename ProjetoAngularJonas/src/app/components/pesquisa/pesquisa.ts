import { Component, Injectable, ViewChild} from '@angular/core';
import { EstadoGlobal } from '../tela-adicionar/tela-adicionar';




@Component({
  selector: 'app-pesquisa',
  imports: [],
  templateUrl: './pesquisa.html',
  styleUrl: './pesquisa.css',
})
export class Pesquisa  {
  
  

  

  abrir(){
    EstadoGlobal.ativo = true
    console.log("foi " + EstadoGlobal.ativo)
  }
 



 


}
