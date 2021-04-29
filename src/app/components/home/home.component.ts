import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ArticleService]

})
export class HomeComponent implements OnInit {

  public title:string;
  public articles:Article;

  constructor(
    private _articleService:ArticleService
  ) {
    this.title ="Últimos articulos";
   }

  ngOnInit(): void {
    console.log(this._articleService.pruebas())

    this._articleService.getArticles(true).subscribe( //se reuso el mismo servicio que en blog pero se le pasa un parametro para hacer una consulta distinata (los ultimos 5 articulso)
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
