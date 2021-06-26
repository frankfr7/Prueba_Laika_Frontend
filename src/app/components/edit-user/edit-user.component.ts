import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { TipoDocumentoService } from "../../services/tipo_documento.service";
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [TipoDocumentoService, UserService]
})
export class EditUserComponent implements OnInit {

  public users: any;
  public token: string;
  public tiposdedocumentos: any;
  public user;
  public status: string;
  public id: any;

  constructor(
    private _userService: UserService,
    private _tipoDocumentoService: TipoDocumentoService,
    private _route: ActivatedRoute
  ) { 
    this.token = 'api-key-laika';
    this.user = new User('', '', '', '', 1, 1);
    this.status = '';
  }

  ngOnInit(): void {
    this.getTiposdeDocumentos();
    this.getUserObtener();
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

  getUserObtener(){
    //Sacar el id del post de la url
    this._route.params.subscribe(params => {
      this.id = params['id'];
    
      this._userService.getUser(this.id, this.token).subscribe(
        response =>{
          if (response.status == 'success') {
            this.user = response.users;
          }
        },
        error =>{
          console.log(error);
        }
      );
    });
  }

  onSubmit(form: any){
    this._userService.update(this.id, this.user, this.token).subscribe(
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
