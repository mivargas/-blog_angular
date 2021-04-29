import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user:any; //objeto para usarlo en los elementos del formulario
  public campo:string;
  public campo2:string;

  constructor() { 
    this.user = { //declarar un objeto para los campos del formlario
      nombre:'',
      apellido:'',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert('formularido enviado')//un mensaje para saber s se envia el formulario
    console.log(this.user)
  }

  hasDadoClick(){
    alert('Has dado click')
  }

  hasSalido(){
    alert('Has salido')
  }

  hasPresionado(){
    alert('Has presionado')
  }

  hasCambiado(){
    alert('Has cambiado')
  }

}
