import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent implements OnInit {
  @Input() pelicula:Pelicula; //se necesita para el componte pelicula aqui le decimos que el atributo va a ser de tipo objeto pelicula para el componente padre
  @Input() indice:number;
  @Output() marcarFavorita = new EventEmitter(); //aqui le decimos cual es la pelicula seleccionada desde el componente hijo (se crea un @output para sacar el objeto hacia el componente padre y se instancia en un EventEmitter para poder emitilo atavez del metodo seleccionar usando la propiedad emit de la clase EventEmitter instanciada para la propiedad  marcarFavorita)

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event, peliculaFavorita) {
    //console.log(event)
    console.log(peliculaFavorita)
    this.marcarFavorita.emit({ //1 se emite el evento con el objeto (que se recibio en el clic del html pelicula)
      pelicula: peliculaFavorita
    })
  }

}

