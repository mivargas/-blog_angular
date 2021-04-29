import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; //modulos para recoger parametros por url

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre:string;

  constructor(
    private _route: ActivatedRoute, //definir como propiedades modulos dentro del constructor como parametros. este metodo es para recoger parametros por el params.suscribe
    private _router: Router // este es para redireccionar con el metodo navigate
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{ //recoger parametros por ruta
      console.log(params)
      this.nombre = params.nombre
    })
  }

  redireccion(): void {
    //this._router.navigate(['/formulario']) //redirigir paginas
    this._router.navigate(['/pagina-de-pruebas', 'miguel'])  //redirigir con parametros
  }

}
