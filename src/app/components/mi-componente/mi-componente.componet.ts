import { Component } from '@angular/core'; //importar el core de angular

@Component({ //decorador para indicar caracteeristicas y propiedades
    selector: 'mi-componente', //directiva (nombre de etiqueta html)}
    templateUrl: './mi-componente.component.html' //aqui se especifica la ruta del archivo html
}) //no poner aqui ;
export class MiComponente{ //se exporta el componente en una clase con un nombre (CamelCace por estandarizacion)
    public titulo: string; //definir propiedades en la clase con modificador de acceso y tipo de dato
    public comentario: string;
    public year: number;
    public mostrarPeliculas:boolean;
    
    constructor(){ //constructor esto mosntrara automaticamente el console.log apenas se cargue
        this.titulo = "Hola mundo, soy mi compnente"; //inicalizar las propiedades
        this.comentario = "este es mi primer componente"
        this.year = 2021;
        this.mostrarPeliculas = true

        console.log("componete  mi-componete cargado")
        console.log(`${this.titulo} ${this.comentario} ${this.year}`)
    }

    ocultarPeliculas(){ //ocultar componente de peliculas (destruir)
        this.mostrarPeliculas = false
    }
}