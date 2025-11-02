import { Component, DoCheck} from '@angular/core';


export let ProdutoGlobal: any[] = [
  {Titulo: "notbook dell", Qtd: 12, Preco: 3800.00},
  {Titulo: "notbook cce", Qtd: 34, Preco: 3600.00},
  {Titulo: "notbook samsung", Qtd: 7, Preco: 5400.00},
  {Titulo: "notbook apple", Qtd: 11, Preco: 4500.00}
];

export let ValorTotal = 0;
export let Qtd = 0;
export let QtdProdutos = 0;



@Component({
  selector: 'app-itens',
  imports: [],
  templateUrl: './itens.html',
  styleUrl: './itens.css',
})



export class Itens implements DoCheck{


  // Pega a variavel global para o html poder pegar as infos
  Produtos: any = ProdutoGlobal

  ngDoCheck(){
    this.CalcularQtd()
    this.CalcularValorTotal()
  }

  
  AdicionarProduto(NovoProd = {}){
    this.Produtos.unshift(NovoProd)
    
    console.log(ProdutoGlobal)
  }


  ApagarProd(Index: number){
    ProdutoGlobal.splice(Index,1);
    console.log(Index)

  }
  
 
  CalcularValorTotal(){
    ValorTotal = 0
    for(let i = 0; i < ProdutoGlobal.length; i ++){
      ValorTotal = ValorTotal + (ProdutoGlobal[i].Qtd * ProdutoGlobal[i].Preco)
    }
    QtdProdutos = ProdutoGlobal.length;
    }


    CalcularQtd(){
      Qtd = 0
    for(let i = 0; i < ProdutoGlobal.length; i ++){
      Qtd = Qtd + ProdutoGlobal[i].Qtd
    }
    }

  
  

}
