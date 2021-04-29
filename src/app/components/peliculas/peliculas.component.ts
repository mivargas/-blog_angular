import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'; //OnInit es el inicial al cargar, DoCheck se ejecuta cuando hay un cambio en el componente  en la app de angular, OnDestroy cuando se destruye el componente
import { Pelicula } from '../../models/pelicula' //se llama al modelo para crear las peliculas y no guardarrlas en objetos literarles de json (se crea carpeta modelo y se define la clase)
import { PeliculaService } from '../../services/pelicula.service'; //se importa el serivicio (se debe crear en la carpeta app otra llamada service y alli crear el pelicula.service.ts)  

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService] //para inyectar el servicio de debe usar la propiedad provider en el decorador de component

})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo:string;
  //public peliculas:any[]; //tipo de dato array
  public peliculas:Pelicula[] //se creo un modelo para no usar objetos json literales
  public favorita:Pelicula; //se crea un objeto pelicula para llenarlo con lo que llega del componente hijo por medio del metodo mostrarFavorita()
  public fecha:any;

  constructor(
    private _peliculaService: PeliculaService //definr una propiedad pivada paa el servicio (_ se usa para una propiedad que esta vinculada a un servicio en este caso pelicula. Es un estandar)

  ) { //el constructor solo  se le debe usar para inicializar propiedades nunca meter logica
    console.log("CONSTRUCTOR LANZADO")
    this.titulo = "Componente peliculas"
    this.fecha = new Date(2021, 2, 20)

    this.peliculas = this._peliculaService.getPeliculas() //servicio para mostrar las peliculas
  } 

  ngOnInit(): void { //metodo que se inicia al cargar el componente
    console.log("COMPONENTE CARGADO (metodo iniciado)")
    console.log(this.peliculas)
    console.log(this._peliculaService.holaMundo()) //metodo del servicio

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
