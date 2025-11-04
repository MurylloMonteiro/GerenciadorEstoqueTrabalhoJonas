import {  Component, DoCheck} from '@angular/core';
import { ProdutoGlobal} from '../itens/itens';


//Estado global para acionar a tela de adicionar Prduto
export const EstadoGlobal = {
  ativo: false
}

@Component({
  selector: 'app-tela-adicionar',
  imports: [],
  templateUrl: './tela-adicionar.html',
  styleUrl: './tela-adicionar.css',
})

export class TelaAdicionar implements DoCheck {
  Nome: string = "";
  QTD:  number  = 0;
  Preco: number = 0;


  AdicionarInfo(nome: string, Qtd: string, Preco: string){
   
    let NovoProduto = {
      Titulo: nome,
      Qtd: parseInt(Qtd),
      Preco: parseFloat(Preco)

    }

    ProdutoGlobal.unshift(NovoProduto)
    this.Fechar()
  }
 
  Abrir: any;
  ngDoCheck() {
    
    this.Abrir = EstadoGlobal.ativo
    
  }

  Fechar(){
    EstadoGlobal.ativo = false
    
  }
  
  
  
  



 








}




