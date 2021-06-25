import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from "../../services/tipo_documento.service";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TipoDocumentoService, UserService]
})
export class HomeComponent implements OnInit {

  public page_title: string;
  public page_title2: string;
  public tipos_documentos: any;
  public users: any;
  public token: any;

  constructor(
    private _tipoDocumentoService: TipoDocumentoService,
    private _userService: UserService
  ) { 
    this.page_title = 'CRUD TIPOS DE DOCUMENTOS';
    this.page_title2 = 'CRUD USUARIOS';
    this.token = 'api-key-laika';
  }

  ngOnInit(): void {
    this.getTiposDocumentos();
    this.getUsers();
  }

  deleteTipoDocumento(id: any){
    this._tipoDocumentoService.delete(id, this.token).subscribe(
      response =>{
        alert('Eliminado satisfactoriamente');
        this.getTiposDocumentos();
      },
      error =>{
        console.log(error);
      }
    );
  }

  deleteUser(id: any){
    this._userService.delete(id, this.token).subscribe(
      response =>{
        alert('Eliminado satisfactoriamente');
        this.getTiposDocumentos();
      },
      error =>{
        console.log(error);
      }
    );
  }

  getTiposDocumentos(){
    this._tipoDocumentoService.getTiposDocumentos(this.token).subscribe(
      response =>{
        this.tipos_documentos = response.Tipo_documento;
      },
      error =>{
        console.log(error);
      }
    );
  }

  getUsers(){
    this._userService.getUsers(this.token).subscribe(
      response =>{
        this.users = response.users;
      },
      error =>{
        console.log(error);
      }
    );
  }

}
