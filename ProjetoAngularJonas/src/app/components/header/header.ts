import { Component, DoCheck, OnInit} from '@angular/core';

export let NomeHeader: any =  {
  Nome: "Jonas"
};

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements DoCheck {
  ngDoCheck() {
    this.getNome()
  }



  getNome(){

    return NomeHeader.Nome;
  }


  
  

  

  

}
