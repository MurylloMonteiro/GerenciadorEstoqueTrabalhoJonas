import { Component, OnInit } from '@angular/core';

export let ValorTotal = 0;
export let Qtd = 0;
export let QtdProdutos = 0;

@Component({
  selector: 'app-itens',
  imports: [],
  templateUrl: './itens.html',
  styleUrl: './itens.css',
})



export class Itens implements OnInit{

  



  Produto: any = [
    {Titulo: "notbook dell", Qtd: 20, Preco: 3800.00},
    {Titulo: "notbook cce", Qtd: 34, Preco: 3600.00},
    {Titulo: "notbook samsung", Qtd: 17, Preco: 5400.00},
    {Titulo: "notbook apple", Qtd: 334, Preco: 4500.00},
    
  ]
  
  
  
  
 
  CalcularValorTotal(){
    for(let i = 0; i < this.Produto.length; i ++){
      ValorTotal = ValorTotal + this.Produto[i].Preco
      
    }
    console.log("O Valor e " + ValorTotal)
    QtdProdutos = this.Produto.length;
    console.log("QtdProd "  + QtdProdutos)
    }

    CalcularQtd(){
    for(let i = 0; i < this.Produto.length; i ++){
      Qtd = Qtd + this.Produto[i].Qtd
      
    }
    console.log("Quantidade e " + Qtd)
    }

  ngOnInit(){
    this.CalcularQtd()
   this.CalcularValorTotal()
    
      
  }
  

}
