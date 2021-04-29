import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'; //OnInit es el inicial al cargar, DoCheck se ejecuta cuando hay un cambio en el componente  en la app de angular, OnDestroy cuando se destruye el componente
import { Pelicula } from '../../models/pelicula' //se llama al modelo para crear las peliculas y no guardarrlas en objetos literarles de json (se crea carpeta modelo y se define la clase)

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;
  //public peliculas:any[]; //tipo de dato array
  public peliculas:Pelicula[] //se creo un modelo para no usar objetos json literales
  public favorita:Pelicula; //se crea un objeto pelicula para llenarlo con lo que llega del componente hijo por medio del metodo mostrarFavorita()
  public fecha:any;

  constructor() { //el constructor solo  se le debe usar para inicializar propiedades nunca meter logica
    console.log("CONSTRUCTOR LANZADO")
    this.titulo = "Componente peliculas"
    this.fecha = new Date(2021, 2, 20)
    this.peliculas = [ 
      new Pelicula("Zootopia", "https://wipy.tv/wp-content/uploads/2019/08/confirman-produccio%CC%81n-de-%E2%80%98Zootopia-2%E2%80%99.jpg", 2015),
      new Pelicula("Enredados", "https://i2.wp.com/elfildeo.com/wp-content/uploads/2020/02/enredados-live-action.jpg?fit=1200%2C800&ssl=1", 2019),
      new Pelicula("Anastasia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NgY-ov8syEx6qIE88qMN0I8X4sSu3MSuoQ&usqp=CAU", 2018)
     
      /*//se descartan los objetos literales json porque se creoo un modelo pelicula
      {title:'Zootopia', image: 'https://wipy.tv/wp-content/uploads/2019/08/confirman-produccio%CC%81n-de-%E2%80%98Zootopia-2%E2%80%99.jpg', year:2015},
      {title:'Enredados', image:'https://i2.wp.com/elfildeo.com/wp-content/uploads/2020/02/enredados-live-action.jpg?fit=1200%2C800&ssl=1', year:2019},
      {title:'Anastasia', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NgY-ov8syEx6qIE88qMN0I8X4sSu3MSuoQ&usqp=CAU', year:2018}
      */
    ]
  } 

  ngOnInit(): void { //metodo que se inicia al cargar el componente
    console.log("COMPONENTE CARGADO (metodo iniciado)")
    console.log(this.peliculas)
  }

  ngDoCheck(): void {
    console.log("DOCHEK LANZADO")
  }

  cambiarTitulo(){ //se ejecuta cada vez que hay un cambio en el componente
    this.titulo = "El titulo ha sido cambiado"
  }

  ngOnDestroy(){ //se ejecuta cuando se destruye el componente
    console.log("el componente se va a eliminar")
  }

  mostrarFavorita(event){ //3 recibimos el objeto en el metodo con el el objeto que paso el evento
    console.log(event)
    this.favorita = event.pelicula; //4 se crea la propiedad con el tipo del modelo que va recibir el cual recibe un objeto que llega en event.pelicula para pasarcelo al padre
  }


}
