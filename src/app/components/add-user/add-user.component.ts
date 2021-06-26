import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { TipoDocumentoService } from "../../services/tipo_documento.service";
import { User } from "../../models/user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService, TipoDocumentoService]
})
export class AddUserComponent implements OnInit {

  public users: any;
  public token: string;
  public tiposdedocumentos: any;
  public user;
  public status: string;

  constructor(
    private _userService: UserService,
    private _tipoDocumentoService: TipoDocumentoService
  ) { 
    this.token = 'api-key-laika';
    this.user = new User('', '', '', '', 1, 1);
    this.status = '';
  }

  ngOnInit(): void {
    this.getTiposdeDocumentos();
  }

  getTiposdeDocumentos(){
    this._tipoDocumentoService.getTiposDocumentos(this.token).subscribe(
      response =>{
        this.tiposdedocumentos = response.Tipo_documento;
      },
      error =>{
        console.log(error);
      }
    );
  }

  onSubmit(form: any){
    this._userService.create(this.user, this.token).subscribe(
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
