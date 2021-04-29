import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service'; //se importa el servicio y se declara un provider
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {
  public blogText:string;
  public articles:Article;
  public url:string;
  
  constructor(
    private _articleService:ArticleService
  ){
    this.blogText = "Blog" //propiedad creada para el decorador (input) del slider en blog. tambien se puede pasar un string directamente en la platilla blog con el formato "'blog'"
    this.url = Global.url;
  }

  ngOnInit(): void {
    console.log(this._articleService.pruebas())

    this._articleService.getArticles().subscribe( //suscribe llega gracias al observable se necesita para recoger los datos. NOTA esto devuelve una funciones callback con el response y el error
      (response)=>{
        console.log(response)
        
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      (error)=>{
        console.log(error)
      }
    )

  }

}