import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'], 
  providers:[ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[]
  public searchDato: string;

  constructor(
    private _rute:ActivatedRoute,
    private _ruter:Router,
    private _articleSevice:ArticleService
    ) { }

  ngOnInit(): void {
    this._rute.params.subscribe((params:Params)=>{
      let search  = params.search
      this.searchDato = search

      this._articleSevice.search(search).subscribe(
        (response) => {
          //console.log(response)
          if (response.articles) {
            this.articles = response.articles
            console.log(this.articles)
          }


        },
        
        (error) => {
          console.log(error)
          this.articles = []
        }
      )

    })
  }

}
