import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NomeHeader } from '../../components/header/header';

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

   SetNome(Nome: any){
      NomeHeader.Nome = Nome;
  
  
      
    }

}
