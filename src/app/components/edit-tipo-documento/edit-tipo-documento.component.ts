import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from '../../services/tipo_documento.service';
import { Tipo_documento } from "../../models/tipo_documento";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-edit-tipo-documento',
  templateUrl: './edit-tipo-documento.component.html',
  styleUrls: ['./edit-tipo-documento.component.css'],
  providers: [TipoDocumentoService]
})
export class EditTipoDocumentoComponent implements OnInit {

  public status: string;
  public tipo_documento: Tipo_documento;
  public token: any;
  public id: any;

  constructor(
    private _tipoDocumentoService: TipoDocumentoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.tipo_documento = new Tipo_documento('');
    this.token = 'api-key-laika';
    this.status = '';
  }

  ngOnInit(): void {
    this.getTipoDocumentoObtener();
  }
  
  getTipoDocumentoObtener(){
    //Sacar el id del post de la url
    this._route.params.subscribe(params => {
      this.id = params['id'];
    
      this._tipoDocumentoService.getTipoDocumento(this.id, this.token).subscribe(
        response =>{
          if (response.status == 'success') {
            this.tipo_documento = response.Tipo_documento;
          }
        },
        error =>{
          console.log(error);
        }
      );
    });
  }

  onSubmit(form: any){
    this._tipoDocumentoService.update(this.id, this.tipo_documento, this.token).subscribe(
      response => {
        if (response.status == "success") {
          this.status = 'success';
        }else{
          this.status = 'error';
        }
       },
       error => {
         this.status = 'error';
       }
    );
  }

}
