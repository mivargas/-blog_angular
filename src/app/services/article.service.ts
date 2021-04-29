
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaderResponse, HttpHeaders } from '@angular/common/http'; //libreia para hacer peticiones ajax al backend
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()

export class ArticleService{

    public url:string;

    constructor(
        private _http:HttpClient // se declara una propiedad del tipo HttpClient (nota se debe agregar el httpclientmodule en el app.module)
    ){
        this.url = Global.url;
    }

    pruebas(){
        return "soy el servicio de articulos"
    }


    getArticles(last:any = null):Observable<any>{ //se crea un parametro opconal por defecto lorque la ruta sirve para traer todos los articuos o solo los ultimos 5 (metodos del backend)
        let articles = "articles"

        if (last != null) {
            articles = "articles/last" //en caso que llegue el parametro (no sea nulo) la variable cambiara al final de la url pa aque buque los 5 ultios articulos
        }

        //return this._http.get(this.url+'articles')
        return this._http.get(this.url+articles)
    }

    getArticle(id:string):Observable<any>{ 
   
        return this._http.get(this.url+'article/'+id)
    }

    search(searchString:string):Observable<any>{
        
        return this._http.get(`${this.url}search/${searchString}`) 

    }

    create(article): Observable<any>{
        let params = JSON.stringify(article) //no se pueden enviar los datos como un objeto de javascript, tiene que ser como un objeto pero converido en un string (solo se puede enviar numericos y strings)
        let headers = new HttpHeaders().set('Content-Type', 'application/json') //configurar a diferentes cabeceras como content type, autorizaciones, etc (en este caso content type)
    
        return this._http.post(`${this.url}save`, params, {headers: headers}) //se le pasa por metodo post la ruta con marmetros y las cabecera
    }

    update(id, article): Observable<any>{
        let params = JSON.stringify(article)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.put(`${this.url}article/${id}`, params, {headers:headers})
    }

    delete(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.delete(`${this.url}article/${id}`, {headers:headers})

    }


}