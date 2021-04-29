import { Injectable } from '@angular/core' //permite aplicar decorador a la clase y asi no tener que crear el objeto como tal (new) simplemente permite inyectar el servicio en u provider y tenerlo disponible siempre
import { Pelicula } from '../models/pelicula';

@Injectable() //se  declara el decorador
export class PeliculaService { //se crea la clase

    public peliculas:Pelicula[] 
    
    constructor(){
        this.peliculas = [ 
            new Pelicula("Zootopia", "https://wipy.tv/wp-content/uploads/2019/08/confirman-produccio%CC%81n-de-%E2%80%98Zootopia-2%E2%80%99.jpg", 2015),
            new Pelicula("Enredados", "https://i2.wp.com/elfildeo.com/wp-content/uploads/2020/02/enredados-live-action.jpg?fit=1200%2C800&ssl=1", 2019),
            new Pelicula("Anastasia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NgY-ov8syEx6qIE88qMN0I8X4sSu3MSuoQ&usqp=CAU", 2018)
        ]
    }
    holaMundo(){ //se hacen los metodos del servvicio
        return "hola mundo desde un servicio de angular";
    }

    getPeliculas(){
        return  this.peliculas;
    }
}