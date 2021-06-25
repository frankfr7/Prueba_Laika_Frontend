import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from '../../services/tipo_documento.service';
import { Tipo_documento } from "../../models/tipo_documento";

@Component({
  selector: 'app-add-tipo-documento',
  templateUrl: './add-tipo-documento.component.html',
  styleUrls: ['./add-tipo-documento.component.css'],
  providers: [TipoDocumentoService]
})
export class AddTipoDocumentoComponent implements OnInit {
  public status: string;
  public tipo_documento: Tipo_documento;
  public token: any;
  

  constructor(
    private _tipoDocumentoService: TipoDocumentoService
  ) { 
    this.tipo_documento = new Tipo_documento('');
    this.token = 'api-key-laika';
    this.status = '';
  }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    this._tipoDocumentoService.create(this.tipo_documento, this.token).subscribe(
      response => {
        if (response.status == "success") {
          this.status = 'success';
          form.reset();
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
