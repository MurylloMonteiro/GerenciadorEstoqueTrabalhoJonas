import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NomeHeader } from '../../components/header/header';
@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login  {
  
  


 
  SetNome(Nome: any){
    NomeHeader.Nome = Nome;


    
  }

}
