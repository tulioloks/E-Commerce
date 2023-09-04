import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-form',
  templateUrl: './forma-pagamento-form.component.html',
  styleUrls: ['./forma-pagamento-form.component.scss']
})
export class FormaPagamentoFormComponent {
  public indice:string   = '';
  public descricao:string= '';
  constructor(
    public forma_pagamento_service: FormaPagamentoService,
    public activated_route: ActivatedRoute
  ){
    this.activated_route.params
    .subscribe(
      (params:any) => {

        if(params.indice == undefined) return;
        console.log( params.indice );
        this.forma_pagamento_service.ref()
        .child('/'+ params.indice)
        .on('value',(snapshot:any) => {
          let dado:any      = snapshot.val();
          this.indice       = params.indice;
          this.descricao    = dado.descricao;
        })
      }
    )
  }

  salvar(){
    let dados = {
      descricao:this.descricao
    };
    if(this.indice == ''){
      this.forma_pagamento_service.salvar(dados);
    }
    else{
      this.forma_pagamento_service.editar(this.indice,dados);

    }
  }
}
