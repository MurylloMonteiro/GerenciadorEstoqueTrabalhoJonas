import { Component, DoCheck } from '@angular/core';

// Exporto para Tela-Adicionar e Tela-modificar
export let ProdutoGlobal: any[] = [
  { Titulo: "notbook Dell", Qtd: 12, Preco: 3800.00 },
  { Titulo: "notbook CCE", Qtd: 34, Preco: 3600.00 },
  { Titulo: "notbook Samsung", Qtd: 7, Preco: 5400.00 },
  { Titulo: "notbook Apple", Qtd: 11, Preco: 4500.00 }
  
];


//Exporto para Valore-Qtd Component
export let ValorTotal = 0;
export let Qtd = 0;
export let QtdProdutos = 0;



//Envia um Objero para informar ativação da tela mod
export let EstadoTelaModGlobal = {
  Nome: "",
  Qtd: 0,
  Preco: 0.0,

  IdProd: 0,

  Ativo: false
};

@Component({
  selector: 'app-itens',
  imports: [],
  templateUrl: './itens.html',
  styleUrl: './itens.css',
})



export class Itens implements DoCheck {
  

  // Pega a variavel global para o html poder pegar as infos
  Produtos: any = ProdutoGlobal
  


  ngDoCheck() {
    
    this.CalcularQtd()
    this.CalcularValorTotal()
  }


  AdicionarProduto(NovoProd = {}) {
    this.Produtos.unshift(NovoProd)

    console.log(ProdutoGlobal)
  }


  ApagarProd(Index: number) {
    ProdutoGlobal.splice(Index, 1);
    console.log(Index)

  }



  AbrirTelaMod(ItenMod: number) {
    EstadoTelaModGlobal.Ativo = true;

    EstadoTelaModGlobal.Nome = ProdutoGlobal[ItenMod].Titulo;
    EstadoTelaModGlobal.Qtd = ProdutoGlobal[ItenMod].Qtd;
    EstadoTelaModGlobal.Preco = ProdutoGlobal[ItenMod].Preco;

    //Serve para passar o index do objeto no array
    EstadoTelaModGlobal.IdProd = ItenMod;
  }


  CalcularValorTotal() {
    ValorTotal = 0
    for (let i = 0; i < ProdutoGlobal.length; i++) {
      ValorTotal = ValorTotal + (ProdutoGlobal[i].Qtd * ProdutoGlobal[i].Preco)
    }
    QtdProdutos = ProdutoGlobal.length;
  }


  CalcularQtd() {
    Qtd = 0
    for (let i = 0; i < ProdutoGlobal.length; i++) {
      Qtd = Qtd + ProdutoGlobal[i].Qtd
    }
  }




}
