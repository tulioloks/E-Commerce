import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-listar',
  templateUrl: './forma-pagamento-listar.component.html',
  styleUrls: ['./forma-pagamento-listar.component.scss']
})
export class FormaPagamentoListarComponent implements OnInit{
  public dados: Array<any> = [];

  constructor(
    public forma_pagamento_service:FormaPagamentoService,
    public router: Router
  ){}

  ngOnInit(): void {
    this.forma_pagamento_service.listar()
    .on('value',(snapshot:any) => {
      this.dados.splice(0,this.dados.length);

      let response = snapshot.val();

      if(response == null) return;

      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          this.dados.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      )
    })
  }

  excluir(key:string){
    this.forma_pagamento_service.excluir(key);
   // console.log( key );
  }

  editar(key:string){
    this
    .router
    .navigate(['/forma-pagamento/form/' + key]);
  }


}
