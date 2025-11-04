import { Component, DoCheck } from '@angular/core';
import { EstadoTelaModGlobal, ProdutoGlobal } from '../itens/itens';

@Component({
  selector: 'app-tela-modificar',
  imports: [],
  templateUrl: './tela-modificar.html',
  styleUrl: './tela-modificar.css',
})
export class TelaModificar implements DoCheck {
  
  NomeMod: string = "";
  QtdMod: number = 0;
  PrecoMod: number = 0.0;

  Abrir: boolean | undefined;


  ngDoCheck(){
    this.MostrarNoInput()
    this.Abrir = EstadoTelaModGlobal.Ativo;
  }

  ModificarItem(Nome: string , Qtd: string, Preco: string){
    let index = EstadoTelaModGlobal.IdProd;

    ProdutoGlobal[index].Titulo = Nome;
    ProdutoGlobal[index].Qtd = parseInt(Qtd);
    ProdutoGlobal[index].Preco = parseFloat(Preco);
   

    this.Fechar()
  }


  MostrarNoInput(){
    this.NomeMod = EstadoTelaModGlobal.Nome
    this.QtdMod  = EstadoTelaModGlobal.Qtd;
    this.PrecoMod = EstadoTelaModGlobal.Preco;
  }

  Fechar(){
     EstadoTelaModGlobal.Ativo = false;

  }
 
}
